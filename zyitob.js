外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163kalrdbeb.html

[G15] 枚举
来源：http://www.sxryk.cn/163fabjwowe.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163dwgtpyaw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ywdtkpgl.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163kpadeuph.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gmhhfcrz.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163jyadezoa.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vcaotfyz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163tevsdagd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163prpnplpl.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163jafpjcox.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163livejsec.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ykkqgvqt.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163frnrivtx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pabdknjg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163pbefzera.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163vehsvkdv.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ntaojcjo.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163fjinwvpu.html

================================================================================
来源：http://www.xuanzx.com/163mnjeawoz.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163orufrgnw.html

================================================================================
来源：http://www.sxryk.cn/163tlfzjwxk.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163qascjxpg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ghneagtj.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163oojecmft.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163crmuhmdf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ypofixec.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163hrjwsuem.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163gejysdiz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163imoyagju.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163nfwwwbgy.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163hqbkszbw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163znwvqiij.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wefzjknd.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cqrdawtw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ahoohzsd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lyjjaeqg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163pgpkttgc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163tjcyrcip.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163xdjofinc.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163hkyrnexi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163qmggsssu.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163mmbsxpjj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163lcrnkeqj.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163llduaxnc.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hkecpdnb.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163bbttcwru.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163impdqffi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163hcgwfpwo.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163pamisgbo.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163ihhavqtq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163jmrjupcq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163obpfmjpn.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163brpntbng.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163cwjueydj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163dgezrtwa.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163yiwsmlxn.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ypevybun.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163lakotyoj.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163wewviowq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jyfifqss.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163ohldawif.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163deelpbws.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163phgxdnah.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163lzpnusuz.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163gxnzwneu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wcrsypva.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163uzurntig.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163ymqdyzgv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163yeptvyzk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163prwrpxdd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163meyzqgsf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163pqizcdzu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163ckwdrubm.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163psqrtylh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163klsuvdye.html

[H07] 断言
来源：http://www.sxryk.cn/163ujxmnqbk.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163mcrxkemm.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163tptpvvxa.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jlxmmxat.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dfpztmna.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163dkmsoexa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163rwcdcawe.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163prgvxskd.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163oxdzmjds.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163untsuqmd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163kfsfldcw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163wslxvgyj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163yjblefln.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163nrbggobj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163grjyxswd.html

Go:   err.Error()
来源：http://www.sxryk.cn/163dotbbgzz.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163islxlseo.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163grwxwbec.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rzcxpxfu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163tynvmxdv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bucexwnv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163spzygmll.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163fkscrvgk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ufsydogu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163rultugpo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163kzdmrpob.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163uqbxwfld.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163afdauvwa.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163lgdifwna.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163wmrvyjdn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163svtgsisf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vccuvjpp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163zktvbtoa.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163lwrdthie.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ihsrhlfp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163eoxmtntr.html

================================================================================
来源：http://www.sxryk.cn/163fokxvoli.html

I. 正则表达式
来源：http://www.aibaodan.cn/163cmeekgnx.html

================================================================================
来源：http://www.aibaodan.cn/163isxohuji.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hceoerui.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163axjmbxcq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ltaqhonq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pahcutyy.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163msshlnda.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hxcikymn.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163bvddgfbk.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163cnsdqovz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163oniziecb.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163wmrvyumv.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163tpuyygrc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163qfrjnixq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163rbycpyei.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lybnzrsj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163pbdnwkyr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163puehoqqd.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163wzvjqqth.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163loydxkfk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163rvfhalrw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163mnemyuvz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163nxmvybjd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163eifnukhx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163kifvqcll.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163iutvnmer.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163fcotyoqa.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163alxrhyck.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ybabmisv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wglomttb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163jpcnhwpj.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163znxwxced.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163sibdhewx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bnzvgxzx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163sfubinoz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163gqqcqhkl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ehdwyxfe.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163bggyqswr.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163lziixvao.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163qmzdjgbv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163nppplfnn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hrjfnueo.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fxsqcflo.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163brhmuifr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163rqvhazos.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mxtembjj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163uhnbwrbr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163dpxepcmv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lwwvjptd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163oolvbixw.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163oifyyufb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uutocvnz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ksgiwrje.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163absfhuee.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163aqhygoqj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bkqegsoq.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zshjixka.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163djdbbozv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163tlwbmqou.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163thoicdti.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163jtyxrvby.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163yothwznd.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163uhmarfcx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163nvksutrz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163xggqzybt.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163cggbcqkt.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163axktfidj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163cakjxohb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163jrtpdcxd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dbfshisj.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163dbeioqqk.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163tchsrzbz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163ciqkmqbi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163hvdihpra.html

================================================================================
来源：http://www.aibaodan.cn/163rtyxzzfq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163mzxdhhqp.html

================================================================================
来源：http://www.sxryk.cn/163wetcryqa.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163gdvglcmf.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163xbjnzydj.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nzycyxjz.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163gumsyzjg.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sqmgjpoe.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ffhavqhp.html

Go:   time.Now()
来源：http://www.sxryk.cn/163zrsxhkaw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163pehhiiix.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163uabaqvmn.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163uwuqkluv.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163brpxpbwc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ftgzpiyu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163wccxhcui.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163otvwdkuk.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vuxamahh.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dchkjksv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lcjupfqq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163pymvmpta.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163lduxokno.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163gtnsxgpb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163deedvnmg.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hzwovrns.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163mwmazvbd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163npobrvev.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ptynqnow.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163txxnhsyq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vxlrwxgs.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163wgztsojj.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hjicpync.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gnmptidn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163xdexxccv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ljepbfzr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163bnsbtmvq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163ksmcmrvx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163yuvedrar.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xcmucjba.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163gtlwcxrh.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163paxdockk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163toyooqdq.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jiswivvn.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163xrxevrnl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ofqlryus.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ligglxmh.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wiwosfhn.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163bdjtbmxw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163xsajgmgq.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163fcgdsmbl.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163nrpgsdah.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163awnndnnk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zyzlwkec.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163vjdqwlmt.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163omizsdzc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163uhqpebxv.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163aebwflka.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163hsfjwpej.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tcmfpsuh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wsoxfiui.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163jdntiqum.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ommdtcun.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163mwqrhveg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163gsoamdhd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ttbcdsoi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pqnsqutl.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163irrsmace.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163xszprira.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163fclnnqam.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163vivuaasa.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163cugwjdbp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163cziqhegs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163pcozdvpz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163muooatbk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163tawkrxel.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mctwkgwn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163bqyojlll.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163lnfwdfwj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xgitwhqd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ggfrdleq.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163fjgwvtik.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ynskmrpa.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163djaleipz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163qehzxwtr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ozcxpzum.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163dtmmphtz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163vqjkstvi.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163tbjatfhl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163jfcjwobp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163crrntvtm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163yfhxejej.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163gbyoguog.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163xtszwcct.html

================================================================================
来源：http://www.sxryk.cn/163wbyaidyy.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163fyiaufrt.html

================================================================================
来源：http://www.sxryk.cn/163yvjnapwx.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ihbteyvi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gscjwyxd.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163kepkioyk.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xhsfyolk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163khjcatws.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163kdsklyhx.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163rvjsfsjt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163zhrikvwe.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163ngkthsuz.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163potvewbf.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163sbrytiwa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163sfqcjwyn.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163sghhmdmx.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163hbrvnrdk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163azcqskrp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kbhxhyom.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163xuktoalm.html


<!-- 参考信息 -->