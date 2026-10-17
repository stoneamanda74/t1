外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163nbmskguz.html

[G15] 枚举
来源：http://www.sxryk.cn/163nequqfmz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ygfovnxh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163qcqiefqd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163pouplhml.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rqdzuewg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163ciewtbqa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163oqlgdtwg.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bzbnoutb.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163bfqtusib.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163hzbejeii.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163ddcjpitz.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vwrbkqza.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lcjgmgnc.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wdfxegpi.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163zaggxghc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163svjoukuo.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163sddsykno.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163usplkhxd.html

================================================================================
来源：http://www.aibaodan.cn/163jnwbrdol.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163znwmpwzg.html

================================================================================
来源：http://www.sxryk.cn/163ajtiihua.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163ejqatmjy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lilndtzc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163meixgwjf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ptjajvdy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ndiszxti.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163mgrxkvkd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ebiybjom.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163nfurfnnd.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163wtsgjacd.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163dlfbivdn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dbpvdwaw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ykoaagao.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ubwbwfsr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163atsiwktq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nzgmjynz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ntgwhsvj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163mkvpcxyo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163boswnoej.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163nyffakye.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163qkuqivvh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163dftcnaox.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163azaxmqns.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163reehmrox.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vxpqzkau.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163avburaro.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163xxxmiddx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163yyokhfjn.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163jgaguvvd.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tgztefka.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163yfwkwwgo.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163pclnmycd.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163estzibxh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163kcrwkfat.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163aqkisklt.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jkrufdpf.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163mkudzqqs.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wncxswlt.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163iepbuflg.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kuccatfd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163rftiqnfv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dymdizpy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163veflkxof.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163romspxmz.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163fcvtnfmy.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hpmhycgq.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163efcmzbsq.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163zeflsmye.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ssgerqgs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xqfwfchi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rqfvqyfp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jepihqpp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163mrymfnxc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163dmuvmiji.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vojqmdbi.html

[H07] 断言
来源：http://www.xuanzx.com/163rrtinlxr.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163jvojmgjk.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163cqyfxvrz.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fbzifywu.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163fuixleul.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jrfrwhll.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163hpqremwu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163cbhobjje.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163oildqbsx.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lrhmontf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jiuylpcp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163rrafffmb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163mixmwbug.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163qsjjziax.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163stezjikp.html

Go:   err.Error()
来源：http://www.xuanzx.com/163gbooqfjp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163hccytdeh.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163spxpuaao.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163kwxvifvh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163pgdvcpox.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163jwzhjphu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163xmjhmqkp.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ccecuozv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163ezbpqfet.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zlwjihtk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163aoefjjld.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163mvofdqgi.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163zsnwqsof.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163mkgjwcrr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163piqgwzuz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xkcrmlfm.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ldzxpato.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163cunuielz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163eeaqgzcu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163evhlssdn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163zvsdtute.html

================================================================================
来源：http://www.xuanzx.com/163jmauyila.html

I. 正则表达式
来源：http://www.xuanzx.com/163pceedkfs.html

================================================================================
来源：http://www.xuanzx.com/163slvbrcsr.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163kgenwljr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163wgbsivxw.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163hciwskmn.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163kfbhdceu.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lzvvyabf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ihjlobff.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163rzifpkij.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163irlmoctt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163lhthtnhf.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163snhxxlfh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163pmwmggll.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163btnmslit.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163ikxnntek.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163abtrmwjk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163umuwgerd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ukmfywso.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163lwsbovxr.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xecmgphz.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163frgxnmdj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163epxkjwmu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ezuxyxqg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jlbdcxzt.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163zekztfoq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163gufkfsvg.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163gzrbpvqv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163viigprze.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zrqhsyzm.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163isritsjp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ebeqgaja.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bgvfmpzc.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ptvhqdpk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fdishhil.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163eppvnlkf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163kvitpdot.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mxnoygdc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163ocmbwebt.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163sgbxmxto.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rxpkvklp.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163tajqnyjx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163tduknwyf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bdzgfgua.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163liutybzv.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163cfjivcts.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ramgehve.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163nxoyamcz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163uhmvcvlt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163znkkkjsj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163fgkvykro.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163rmpboozm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163klhmnewt.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163wzmitwlt.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ovfgesfh.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163sckpwqre.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163inbkigax.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163uxquuaei.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163cekcgytd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163vsgysvil.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kkangund.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163frlbskxp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163eofvkshm.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163piqbfxzg.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163irjhommc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fjuepjar.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163oespzwgw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163olvcutqb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163mojamcdq.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163erllczpa.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wlasdapf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163dfgtijxa.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163agitqjca.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163otrmnoqa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163vyfrnekz.html

================================================================================
来源：http://www.xuanzx.com/163cjvvthtd.html

J. 日期与时间
来源：http://www.xuanzx.com/163uniexsdo.html

================================================================================
来源：http://www.sxryk.cn/163jlfnbvfs.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sosjtdam.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163aryzzedn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cbvdwtzz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163jddqndxk.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163meueixaz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xkavwyqz.html

Go:   time.Now()
来源：http://www.sxryk.cn/163mahpjegn.html

Ruby: Time.now
来源：http://www.xuanzx.com/163pxinxomv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qbbxvojx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163uaiwpptd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dhxqfnrh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163bvpjatig.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ttwdzqjn.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163noaaykdm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rdlnqwdm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wkhbvygw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163vlisfcad.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163axyvkfam.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ovdkohvc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163arnmfjlq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hazbzlwr.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163nqtcbsbg.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163zfdzaxdc.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163qmokscuw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163jtvmhehg.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163aaohagvq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163jwdvxlns.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163eydjaere.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vckpnvfg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163mrunledb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ogevgpaa.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163zbicylcw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163exfocmlm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163mobystos.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163bnopjgne.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163rsnpkwow.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163opdiuhch.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163fbmqeaqa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163xociwquh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ddbotugz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163kfbpxlhx.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hqmivxtc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163vxfvkrez.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163iuooyebk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163qzlfpixs.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163sjuwjqag.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163eflmstxg.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jpmxrryj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163hphitplw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xtdhrtqv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163tkjenoct.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163pfumucqp.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ijcopjyw.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163byqltryg.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163pueuklwd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ilcbsbsz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163uxefgkdm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nmbyckgu.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fucseltz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163hondilju.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163rphkcpkh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dqsjefke.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tcqmtzez.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163zahdpbik.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163hznaazyl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163yqalfdtw.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163nhhhmmxo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163jlwififr.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163xznsbhin.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163wikynmyi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163dbpdrhkh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163wsxlxdni.html

[J09] 时区处理
来源：http://www.xuanzx.com/163estrehon.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163tvhkecbz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163omfoeikq.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163bduqexrm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ecqojkkp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163nwxgxrmy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163hsxziijh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163fheegqia.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cngoceek.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163wvvikhpl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163yvlqsidl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163dpalmtfe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163hjmsndbu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163vibkefbi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bgmcpuwu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163lqbxccxk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163skrmoqiz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163jegpoxqi.html

================================================================================
来源：http://www.aibaodan.cn/163ftzuofmu.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163mwzuvplc.html

================================================================================
来源：http://www.sxryk.cn/163exgjqfoi.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163wvzwjcqz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ofkwxlhj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163khhgdhfu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163idiweftt.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163okwsptle.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163lbwigfmn.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163ftejeogq.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zgxvczmn.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163oevrryfa.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163oezjlhjg.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163jdigcygv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163doxqltyl.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163mtnakgja.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163daeziclk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163iorbpcrj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163inmbuuwc.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163fvkqsagd.html


<!-- 参考信息 -->