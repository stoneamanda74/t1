外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163qantxzcz.html

[G15] 枚举
来源：http://www.aibaodan.cn/163pbhyzohx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163mcesitgb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jazgcijw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ezshwgho.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163ggndncfm.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163ubgcveru.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zqxnvumf.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163pkfflckb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qaeegyrk.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163sxqtkqul.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163zsjwypmm.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163giejdjty.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bombqtsw.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163yiepqfvr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163eeqihizn.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mynpyzpi.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163pzzlhyol.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163nnkjtzih.html

================================================================================
来源：http://www.aibaodan.cn/163shmsvpgi.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163jyebvrfo.html

================================================================================
来源：http://www.aibaodan.cn/163szrxtkce.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163zttvesxt.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163gafixbss.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163sbzaatqi.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163kvvouvml.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163uecvyqch.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163opjagbto.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163gopozpen.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163epkwubuy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163wrvnidmp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163vkcclnmw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163zadlpijb.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jlbfjqxu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cvcluwyb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jxqcjuai.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mxbudzik.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163vtbxkpjt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163pvmwiseg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163gsimerpr.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163egxcquna.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163lgbpzhjv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xmaivopv.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fqrecmmm.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163eutwbnus.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163etdaaeyk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163wxaalvai.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163mmasilwx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163wjeyhphy.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163wpuukatj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163cxrshiqm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ocomskgh.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vjfivuep.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163sutjpgxe.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xkgddohw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163xrziicvw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163cdbsipnu.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163uhihllbo.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163jidruavu.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163xxcjzapx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163bfgcccpz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cmbvhwob.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163omppnild.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163dyabnxfv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163uayyxbht.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dhjpisaa.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163tsmmiulk.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ywptsary.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163yhpzblyk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163isxonacf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163cxsswgqx.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163uunorhpc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163uqifbfft.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163rbzfsrnq.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mmehdumg.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163yhyxayvs.html

[H07] 断言
来源：http://www.aibaodan.cn/163nhbgaftj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ikbizvqv.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163fuqkwobw.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163mjbrwspc.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xkglyqpx.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163tmipfxkx.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163hwhbxamb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jcszmcct.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ojuerxqe.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163bxcafohk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vtkkknqq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163tuxltgef.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163mcrajrob.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qdehgyou.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qhrxkrhx.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163umdhaddi.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163upehbmdu.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163bbbgmfub.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kekcavmt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163vpthpgce.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163smoprkhr.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163jrypkupd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163hjxkkxjj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163dfuynikg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163igspxvig.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jhpfozpr.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163vrxqyime.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163mpkrpntu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tycoiycv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163oivxrwpk.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ibckjjkn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fafoxczw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xclxjbct.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163fprfisms.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163nipoykpv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163evbqqxvt.html

================================================================================
来源：http://www.aibaodan.cn/163hbxujciv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163bknfqtru.html

================================================================================
来源：http://www.aibaodan.cn/163srxizgmh.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163tloohpbl.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ixiatvwl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163zrlcsmjd.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jzrassbx.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mubuygzu.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163ewkxiexb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163utlyfywb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163bvlilnsa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163oeprngdw.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163rkinbzdb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163btijghor.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163pbvlifyl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163klqnteqa.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163tvdyejww.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ijhxwjbs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163aivpfxsq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163tzsujjnp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163eypzqpta.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163uqwelpbt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dweygemi.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163xvppwrcb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163hpvwcbgm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163wmlranfv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163yfimzfou.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163dpvhujdk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163mppjihdz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163lwsxjfqm.html

[I04] 正则替换
来源：http://www.xuanzx.com/163glwekkrx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163dhsmyjtp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163kmmmagpf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lenofajk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gjgbkxuh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163cmwbacsr.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163lqofqgng.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163pfhnaxpd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zynaixck.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163jwgxmfcm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163waohndaf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ksotgpae.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dlobqhrp.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hwijqdqk.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jlhppwdw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bkzbzqma.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hslvhdle.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163txpnvyqf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qvxtihsz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gknhsosi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163riinakek.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aacdrtjz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dedzkxsg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163byhuacym.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163qbniwnzt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163afuetgyo.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uyxtxdkc.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163skbewvgb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163kocifaov.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163fubmqumj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163iumakydg.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163miyawpyr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163lqlqfdjw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163muhvrpkw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ohpsqqpa.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163srskiedw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163rbfupvgo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ngrobvdj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ymbjqvlv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pqaxfsqm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wwdskqbx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163hyostgmm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163mbhonjzo.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163dyggyrau.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163lqclxrky.html

================================================================================
来源：http://www.sxryk.cn/163btlpvdjs.html

J. 日期与时间
来源：http://www.sxryk.cn/163ktbakefp.html

================================================================================
来源：http://www.xuanzx.com/163gtsqaals.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163zubhycwu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163rsoupkmh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ocrvcgel.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mfheuqex.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163fqkhospr.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163lyjosbjp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163ogfbyzrg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hhtglpku.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163mftnlxcx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163lypkggxi.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gfhugubq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163azdkcyec.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163vcvteccf.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163axbigquu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qbiwsmpl.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ggefdobe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163oesqfyqv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163hvgptcwf.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163pcrxlyhe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163qzcdghmg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163keghwiwm.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rrhvdaqc.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163txmjzgkj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163cpzlywve.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163hsgzkwqv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hxujampg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163gtjgmjqc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163nmskcxqz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163cgesimbq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163mpncajcs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163zvfmafkx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163qkwermso.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163cqgefgoi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163cfdjliyg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163tfqncipc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ktsyeryp.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163swpjiixi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hrfwfkyd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163izuejcuc.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nxchpevz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163prkqidtv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163doorpzvt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163geigivlw.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163hhtnrdbe.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163hdlorers.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163xbzkbhhf.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163wgxnzucl.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163nfayrrgf.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ljytywew.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163siodpykt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163npparols.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wessvztc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vmnbehfy.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163rvwszizc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xrbfqlec.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163xcegogxu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163uwtbuveh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gyznjxkk.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163lmlebmhj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163izwkemxm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163lhfdldiq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163edhfutjd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cjsvutvp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163dsjzmqgo.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163gsgcjlsr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163spgcltuy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163uonwybzz.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wiuzjmre.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163fglddtbc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163qniqmcrv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ezakzmxw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163zkeltplw.html

[J09] 时区处理
来源：http://www.sxryk.cn/163puxnffen.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gpkqoftc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163awyoseii.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mwfthkou.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163onvhbsmi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163qgkoqufk.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zltzhrhg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163drbsrpwy.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163mujvddlw.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163eloxakpi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163nhyzjgvt.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vubwldxm.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wsoacfkl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163eyencsyi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163bjyzwhsi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qwjvcxdh.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163crenboux.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163ajwhypfj.html

================================================================================
来源：http://www.aibaodan.cn/163zxqygswm.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ibfvtfxp.html

================================================================================
来源：http://www.xuanzx.com/163boeeasql.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163qdbnlbdw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163bvpcpvbr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163capuidvi.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vaxnjpbo.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qbhkibsb.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163pgkpnzoo.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163diyzmdyp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163cjnjouzj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163goaulbbf.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163vfwniczy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163isvzkafu.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163cutzlmxq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163voaeruhv.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bnblnihk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163qckbtdbe.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163quhslxzg.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163pswhorii.html


<!-- 参考信息 -->