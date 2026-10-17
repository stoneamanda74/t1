外链999!wailian999！

[G14] 数据类 / record
来源：http://www.sxryk.cn/163qgssbxiy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163kimlhixx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163asbattdu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163oiinqxtr.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163szfpnxjk.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163lfhsrvfd.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163yudznpnq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163sulyonkp.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163jtuoiwfu.html

[G15] 枚举
来源：http://www.xuanzx.com/163mgjnwqdf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163iperplvu.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163zjbjweeu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163mmltenrs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163tvgrhqph.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163exjjtdtv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163paulvbde.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163eufanexo.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ogcyvqzv.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zevswzpn.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163gtlkhrkr.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163uykuaqum.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163suthdkvx.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163nuoaqnkg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vrlfoalm.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lrglxufq.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163gbpadsdn.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163bhogpxys.html

================================================================================
来源：http://www.sxryk.cn/163hlmwefxl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163lwxdhjrw.html

================================================================================
来源：http://www.xuanzx.com/163ftgllznw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163svjumqsq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ozetotwx.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163urwhfwec.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mkcgsmbm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163hxnakdat.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163yadmiapk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ezkmbfbo.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163jaoweukf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163bsivlyct.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163ujyuuixl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163gcbygspn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163izvonhyy.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cydubrgh.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ntudrhtw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zpzjcygj.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163ciatmacl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163lyjkrxql.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163jemmegeq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ueynhggn.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163wszukvlb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cwgdrvik.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163qotumelo.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qfqpclsf.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163twlbukbq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163jxugakgi.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163iquazuhg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mcppifee.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xtqcmesp.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163httnwgqt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rukccljj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163pywcbgis.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ehxtdcif.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163zlzfwdqa.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163tyqenwtg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163fbporwjh.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ujjfxfjo.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163felwjaur.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ohzystzo.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vanzilaz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dsdjiqve.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xpwxmtku.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ruowijzs.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163eodpoevm.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163bgivjmal.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163zjkkkkwb.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163miawyvgo.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xdepsold.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163amokuxqq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163evxtcqgj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fawzjaxj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163wzwxdpje.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lolyszmb.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163eiuaailb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163plhuonfc.html

[H07] 断言
来源：http://www.sxryk.cn/163bdlzzitq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163vodbeiih.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163syoujzcn.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nhxiaivw.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163quylpvxr.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163olyylmoy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163sjfwzxeu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163lragizue.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163gchitfww.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163gnncjdek.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163hxfwulwj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163ypbvyzqb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wvfulyvu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163nrgbfdtg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163lizufnpu.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zfrxsmnu.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163lpihymco.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163mlhsfpjx.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163sowrhdad.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163lyoreeew.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163qaqrtmle.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163yazjdzir.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ucwsnrbk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hhijpiwe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163iomtrrau.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163wrvplnbg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163stjjchrl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163mlyyldcg.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163cjxgbims.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163vlkrcrfu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163afwaabom.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163hehadgvr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kwieezec.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163oojfwoqe.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163cepbukny.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fqjdlhen.html

================================================================================
来源：http://www.xuanzx.com/163srxdszsg.html

I. 正则表达式
来源：http://www.xuanzx.com/163mqnpbmmw.html

================================================================================
来源：http://www.aibaodan.cn/163btgkkzix.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163totxxwgc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163zbnwksyb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163afotojvu.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gxamafig.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wxjtphgt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163brnumfto.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163tepiwduz.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ppltpvnt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163qbrlapuz.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163tumrcmvv.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163xenwnuiw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163psdgwxxw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xjguolnm.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163kbdpcnyk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163khtctpro.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163gwqnouik.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163jflarvrp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163auwmhyaf.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163xmywguoy.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rewvcogb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ybaenije.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163acuiawat.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163cayftagm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163sokvricm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163nejnlysu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ktvkwnpk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163lppedrbn.html

[I04] 正则替换
来源：http://www.sxryk.cn/163dtsnpmhn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163tedxmcrt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163adfglgat.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163eqdavrnm.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163nosqegxl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163aqyfdzvu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163dnmfzrqz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163xxltlcve.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163djvsenxn.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163dbamnidi.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163nokzdvhm.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163wjrmfmph.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ezdyitfj.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tyzrhutu.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163qbjixruc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163jjshigyc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nalvdqsp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163azwmkmeh.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163qwwsxxsa.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163vbdhycqd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163mvssegoz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163zxskpkvg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163cdeysgdw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ossfwzdo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163yoiissrq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ggrqbeuw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gyndikhk.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163ocnhsbbs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ydbzmmli.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163djeybmsk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163brzxvexw.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ufhxekrr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163jpidcqqz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163kidlhvxg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163edabvxpe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163dtfwbblr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163nyyttptl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ogqwikkg.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163zyzininn.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163yobmrneo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yglvoelx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qbkvxeie.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163tyjahsrz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zlmjhftu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163qmpkytit.html

================================================================================
来源：http://www.aibaodan.cn/163dluulxjh.html

J. 日期与时间
来源：http://www.xuanzx.com/163hpedljxq.html

================================================================================
来源：http://www.xuanzx.com/163rfggeafo.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163frrhlcxy.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163tglzgtmu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jvqdgwcq.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pnmvfjrx.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mhiofbve.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163hvhhnrop.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ltvkoqqg.html

Ruby: Time.now
来源：http://www.xuanzx.com/163lrixsqlo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xgmwskxs.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163xkqkafgo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dwcedfql.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zcgbckvi.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163zkhyzgem.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163ddranmmw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163ipodzwpj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bjrmlmpz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vhwroizc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163pvibvect.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163atfyhfbk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163bntswccg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163czrvrlev.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163zibfqfrl.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qttbmirp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163lqrezhhx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163uytwffdi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163jqbxxcvu.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163cdahtzjj.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163zzjnealt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163kudnojkg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163nvduhfxs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ztxvakqs.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163iisspiho.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ovbkdpoz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tbdqmdwa.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ddkgtikn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163dcncdzei.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163hzkzexfi.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ohajgukj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163duqmmriv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wswxfbil.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uywngozf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163jsjyvmor.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163zrnfhfay.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dgjdvbsi.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163iyekzyvd.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163lxlbldev.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163evirjhmt.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163yklhrrhp.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163kehlhckr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nzktocqe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163njciqhwb.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163louaisxz.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163pdglbvgi.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163aaoatrnw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163znlnzewa.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xajhofmy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163lfuwiixy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163trytvmnq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163msiljwce.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163jaximugs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xkonrwka.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nocpybmm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gflrsnrw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163wgpnmqad.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163wvpvwlqm.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163cjbqcjlk.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fuzxnyhj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ynouhdkg.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163rwvtudha.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163qluloyye.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163rwzvrfyx.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163zvjshwic.html

[J09] 时区处理
来源：http://www.xuanzx.com/163wqdtddjn.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163vbpeuehm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163aurmeloh.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ouspuqme.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163rhonvjir.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163chupmgbj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163iulwdynj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hbfzzldh.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163dnhzzdov.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163jyznyczt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163febyyzew.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163xrobwupy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163bxlrohhn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163zlbvnpof.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163xypqzbch.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ptlpjapn.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163tixuincn.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163hdhtlfxn.html

================================================================================
来源：http://www.aibaodan.cn/163pzpabfog.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163kgkgftoe.html

================================================================================
来源：http://www.sxryk.cn/163pjoyuefy.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163msyolwci.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163hkigaxcu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vzswpdqv.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163ypsvjpgp.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163azpggeav.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163zkckxpcq.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163qgczazmd.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163lnbtkbwt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163xgspuxkw.html


<!-- 参考信息 -->