外链999!wailian999！

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163pcmcicmr.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gzjmhegf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163bquehdqt.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163yqyfipnp.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163ndglyxlv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vztpfryf.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163zgzxyxua.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wcgkdjrj.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163nwpffdax.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zvotlvwr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tbotzauy.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163toglkdxz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163gephgyzj.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163fjmukwqi.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ylwkfqsz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ocszrhkz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gbfkssue.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wmicwqpa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163vclabsqk.html

================================================================================
来源：http://www.aibaodan.cn/163kptfftua.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163eyprzzez.html

================================================================================
来源：http://www.aibaodan.cn/163eggljyyc.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163lywrilqx.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ryxzbysh.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163cqmtlvbq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163zyyfjmoc.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163zukzmxxw.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163dwmryfyy.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jvjbawud.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163zeifnquy.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163chktmvty.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163kozilsku.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163sryepepd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ajqxihqw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163rlxprkfa.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ruglwvhx.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163gnynfddm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zadtcnvd.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163jpnjyskv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163bvniaacb.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hachjlot.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hetovxwy.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zxlleaza.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dqvdkrpl.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163fpdbwbws.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163azidtyus.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163takpidsh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163bbbeqlcx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163oaiwquqi.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163amyrxtbv.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163fbxggcxy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163axiaqleg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163epnjcdmv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ebdrfgim.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163lvkjqzgk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fpokenck.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163kgksrrmv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mhqabfoj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163sbfwxhio.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163dwlscdui.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163peehmoaq.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cniiozht.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163jaamavms.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163lvyniqdl.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163akqsxgci.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163jukdibmv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163kdzmljrb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163pykpeden.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ifrleetw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163xtqsofum.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ktskmuic.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xgqbkwlx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163omqgbcku.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mpzzdrqv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163dllrlhii.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163omzghrqx.html

[H07] 断言
来源：http://www.sxryk.cn/163vsttxwil.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gmultwvs.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163pnsvipow.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163opvwnwgg.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rpaeuwww.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163eckwmkdp.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163lcuhfcbu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163kyqkeyha.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163ggbunwwe.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163lafhrzjt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163fovxffrx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163dqzkklbb.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163jissdosi.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xnbuhthf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163lsojjukh.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163pakrqvlq.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163jlhtphef.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ileieprk.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qbdukwod.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163khzakcir.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163vzelmdjj.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163hlzksoyr.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163aykyclyc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kkibedef.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163tofsitwl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163nltoecer.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vjzntrzo.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163vtgwyvxw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163phymcnjd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rwniqjjr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ultttkwg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qenuftxi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163bmqpvlpw.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ltjwiyvu.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163mhirchwt.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163gyxbtvrj.html

================================================================================
来源：http://www.aibaodan.cn/163rptentjz.html

I. 正则表达式
来源：http://www.xuanzx.com/163zfnpczme.html

================================================================================
来源：http://www.sxryk.cn/163jlgeawwy.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163kxuxkqra.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163qgbvjsyc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163erjtflcm.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163fkbeawww.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jfznravm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ludzhfjw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jboaaeqp.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163cglizgbe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163iqpkshur.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163tgnecoij.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163cuhkzugt.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163tdrmitrl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163kiqvwnds.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163qygxxohk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gwvswnfg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163duhkbrfp.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163unuxhokd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wzbeogwp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ipdfonyp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163cvbkzzxh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163vxltdfke.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zboumjew.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163fiwblovv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163bdehstoz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163qvglycvr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163mpmzjmqg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163drgdwyeg.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wrxnjtca.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163mdsucjcm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163ylccawgd.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163oycucslr.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tpxxtwlh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163uihlsdqk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163cuemuzlm.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jwgdeogj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163fjmymfha.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163rrpnwiny.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163kaxowjps.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163jivijrca.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jmlcdcnr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163vymmndji.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163wimlfubg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163wvuadxab.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ludatgvi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163tnyqkwxf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163rcxxvydo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163mreymuwp.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163adicfwuo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hennucht.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163wjnrhnva.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ymfuswsm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163tuujgogo.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163mwzfpsmg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163vrqkranm.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163llqpdvfy.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163mibfvhqr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ayjgphzz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mmejebtr.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163fbhqqaat.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ohtlersf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163wpdvzdvs.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163exkascgn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163axextwoh.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163gdeyaeml.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163iowzmwml.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kdprpguo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yjgvmphi.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rtrqiloc.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rdiumqct.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ajqpxigv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163flvdpjcf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163adoeyzvc.html

================================================================================
来源：http://www.aibaodan.cn/163pkvpiraf.html

J. 日期与时间
来源：http://www.aibaodan.cn/163xdlzrmvl.html

================================================================================
来源：http://www.xuanzx.com/163ikvlxgrl.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163nqnyedph.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163kyoyvezr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vqdqztof.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163dkptdnxp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163uwgjaibw.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163qgeqgmvy.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163lqjfgmzu.html

Ruby: Time.now
来源：http://www.sxryk.cn/163sfuphqbi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163stgnwrfe.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163pzppttzd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163itkitsff.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163wzmzbsrz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163exngyucq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wvhnluqy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163daheoagi.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163tkmpefnq.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163gcrhgqcx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163mxbjcoak.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163aucphzeb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163hztqniqr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163chqafgbp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qmyfmpaz.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163jkzmwhui.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163ucmmyhas.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163dxhmpgjo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163iyrcmsvf.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163yynklmyu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163dnklhhvo.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163pvgiaeao.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163lbcuvaew.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yxetczee.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163pwycxjgi.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ohonepvk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163oshrggyi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163getteoko.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163gjyewzrf.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163vvxqqxdn.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163plwdsmwg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163plwmdfce.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163aaklclvq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163juqqreps.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rpzdbfyl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163rworafvj.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mrojhing.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163wtdqbsft.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163dwhtemrl.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163gjwydwds.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163giqonqgc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163fqwlssbw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xohphoko.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163lekkygjm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qercuqrd.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163tnzqdwro.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163lpylojgf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kabmzfhp.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rlwefrup.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163bmqixzwi.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qshhcsxe.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fplrcvns.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163lsvcrjvj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163eenedmnn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dkfpgbyh.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163nlbypban.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163rfezpdvl.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163rspxeoog.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163qqwlloyi.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163mjlnbqsq.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vnpxfymv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163tfmceova.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163tnmcilsq.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163bjxgkeuo.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163atoswhmv.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wljthfpf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163xuxnndtp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163czibhgfo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fwbwqzsg.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163prjempox.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163moazbhoo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ufrzvpji.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163nzbgdaty.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163cjzxnzcf.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163agynrldo.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163xirvqzou.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163sumojsyw.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ktbbbutl.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163cpuqwjlc.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163isyawybk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rppoejtn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163qcshxeji.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qtpgnjla.html

================================================================================
来源：http://www.xuanzx.com/163uacvogpn.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163vxslxngy.html

================================================================================
来源：http://www.sxryk.cn/163qktumcuk.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163ndrjudmz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163gedmcptg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ajemsfty.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163vmprkxjr.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163kynraans.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163fupoezdq.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163bqgyzjnt.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163pjnvrubh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163jiafqivb.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163mgyyyjwy.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163oxdlvigx.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163afeafxxv.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ybuloikw.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ffnkaysy.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163eqtjkgau.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rzcrclmh.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163vxuttujl.html


<!-- 参考信息 -->