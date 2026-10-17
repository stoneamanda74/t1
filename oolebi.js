外链999!wailian999！

Java: u instanceof User
来源：http://www.sxryk.cn/163llbpinuy.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163nphpkcil.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163tlpacrvw.html

C#:   u is User
来源：http://www.sxryk.cn/163iffjumkh.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163hvxqogix.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163ondubust.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163fknilmxn.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163maxiyehk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163uvklupag.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163jefsnnia.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163htdhvtjy.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163atdqqusv.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163xorpmoxh.html

[G15] 枚举
来源：http://www.sxryk.cn/163jogcfpnl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163wyetsble.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163yiiyekme.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163zquizndr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163hagxjzzb.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163azzttzuj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163jrqahfel.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163nrtlranl.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wxbxobgh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163eqztqmyj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163vuebgjxg.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163aqchggga.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ggnxibql.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163lmlahbnj.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163msjtvnxb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163rxpwazxj.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163voufgqpk.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163hbrhsjke.html

================================================================================
来源：http://www.aibaodan.cn/163oaxizltt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163stumrepx.html

================================================================================
来源：http://www.aibaodan.cn/163dudavbbh.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163stnhnyla.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xybafhnn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163irhxhtak.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rnanqwoy.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163meiusrzf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ufeqgtgh.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163eiorrwcf.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zmatukhe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vyajbqhp.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163akxcmmed.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ttywebmn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163sgymnqmt.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163chzsqpzl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163qjzhgsvj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kvjjdozg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163fhiekdka.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163gcaklyup.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163frleoywh.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163vczwyzqp.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163zrydrpba.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163sgdfevzq.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163czyodawe.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163fxtmofye.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163xjzcbskh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163hlegjhuc.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qkqiuggk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163tlyguolz.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163zvxymfcz.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163kcnzbgtt.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163uhauxjfm.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gbendxiy.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zplwkerh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163reqhytrk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163wldkucot.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163hnixnpmd.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163vmtsnqjs.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163wfxxgtcp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163flmdmkzy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163hzsnaymr.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163okcuzsuw.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163gvnrzhpv.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163xiqaimpo.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bhxwhtoz.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163dmlqttdt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163drzzysdi.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163kgnizzfn.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163uhoarkcg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163gfwjutnq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163vmmsdfgi.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mdfeelwj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zbujuket.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163iipabxij.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163pwqftsda.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163tbxpdqpj.html

[H07] 断言
来源：http://www.xuanzx.com/163crssnzkh.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163tfovktfw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163latjtmti.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163wtbbsyoe.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ovzzrbks.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163rsobqlmo.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163hddephpp.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163vubmxifo.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163cwzeioqn.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163rapxqpdf.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163qpnvpoyx.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163dowyfhce.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fqilpuig.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163vocrvzjx.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163quldqohb.html

Go:   err.Error()
来源：http://www.xuanzx.com/163knrbtgym.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ldpxwnnr.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163npcgtyfh.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163xkmkeihr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163tsjnacml.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163bcqaulsk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163zmgvevca.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163eenegooe.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163jrjpfdwj.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163fytreuov.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163shvijcdu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163upycvwod.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163mrznwzwr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163zxyxqexl.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163lkerncfu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zstjlnce.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kticzqbq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kjcwycgx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gmkfagis.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163rtgewean.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163piugrotx.html

================================================================================
来源：http://www.aibaodan.cn/163yzmyeflk.html

I. 正则表达式
来源：http://www.xuanzx.com/163ukeyiirw.html

================================================================================
来源：http://www.aibaodan.cn/163pfglkzba.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163rhayamfk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xwybwxql.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163khmiivsz.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lodyrwdu.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163nlfagbzn.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163dsrokdxs.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163yurawsjx.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163cgklszik.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163wsxoxkwr.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163onvnwapr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163rxvyadcb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ctrrhbnd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163hyxiazcu.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pfckbejw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163drjoczim.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163arfnmjvs.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163reponrbk.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qrjdifjz.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163eqcsnlbt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163lqbmxnnq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vfguyeww.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163uomxjpwf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163bagiqijf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163bubpscas.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163oypnkdoe.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163zvosqxpe.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163enbpfwsg.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163xpgxaomm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163nkvjozds.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163obhtbeop.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wyvvtrfg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qncxvscs.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163bwqegobx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163idztpbqe.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163nyndugjk.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ajtdiznt.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163shkmucud.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163uxohqjig.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163pgkkvuxw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eyiokdjb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163virooixu.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jswxoyax.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163hzfxokcx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163tepayulk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163umhlydnk.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ulufuqid.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lvabcjuo.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163vuedleru.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ngdufitg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jslkwosl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163stbazwpp.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163lsyxqpfs.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163nvooshof.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ktoqrkng.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163nxfmhfek.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wsqiouup.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163drdbtfht.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qqokakaz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xwfhcctn.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163gqyplpdb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163xojhbnut.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163nocpmluo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xtadgxea.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163ddibzxhg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163forjmofm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163svpqehjk.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yybvvqbn.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163sohkrucl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nofhgqvq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ztfancxa.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ytzhqdry.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fyjntgpn.html

================================================================================
来源：http://www.aibaodan.cn/163mrnckgky.html

J. 日期与时间
来源：http://www.sxryk.cn/163yyeqnaml.html

================================================================================
来源：http://www.xuanzx.com/163rzkmbipf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163agndzlrg.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163yxhnbgxb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163opnyaobn.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163efqlprvq.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163blvlrbdd.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163lnekuicu.html

Go:   time.Now()
来源：http://www.xuanzx.com/163jxxjaple.html

Ruby: Time.now
来源：http://www.sxryk.cn/163pdcdwwgx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163alvuynrb.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163nmtpaxcf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ikgpgftc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zmurtqig.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xzyxogci.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163zdjldhgp.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vlqqauzj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163lsvcflxp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163axbprvdn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163xxoryowi.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163cefiembs.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163afncbzkc.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163gicteegp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163uvnmijgw.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vbtxkpxq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nsmctvfj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163sdrhomzj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163tkkytbff.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163mvseiyfc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ygfysqpi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ndqisptl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163tdttjwbj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163vrnkajim.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cmbhqzpw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jmosiwpn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mahiligw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163kouxaomm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163tbtiiajm.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163clleiinf.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163uwuiepum.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163pigoglia.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163rknpbkaf.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cyjzgige.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lpymuymh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163sssnipnd.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163nhdxapnu.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163pxemdneq.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163zqjnasvu.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163dkminshs.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163srmcpkim.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163edplwbey.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163xvlezgby.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163euzbmjfg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163hjmkusea.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163cvculica.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163jtxumxbg.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rwtsnhwr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ddgzkytz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163iknzekfk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lihwheqn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163usefejzm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163tujzgwhs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163jkufzxpc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163zpjodoes.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163unfnwydi.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163unzdauhb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ygugchpg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163yorjoowb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163xjdyxgjs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163smwvuapv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zkaomylk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163pedmimfv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163cxhbnoxa.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163erwkhqgt.html

[J09] 时区处理
来源：http://www.xuanzx.com/163vodclqsx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ijmqxlnw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163awwgpqop.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qegkaxtm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163lkkogqyd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163nlfhntcz.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163wlxdtnbm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163itdwaldv.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163zgtupzbr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ytjblnfu.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ozskflxi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163uxuozrck.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163wtjwyzky.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163rnooturj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163gyswsolf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ytdeaiow.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163dqgsgkzt.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163scuoouiy.html

================================================================================
来源：http://www.sxryk.cn/163drskcfzh.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ntukysbg.html

================================================================================
来源：http://www.aibaodan.cn/163xfogaqpv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163vrfmlqvk.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163iujwdetg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163zcorgvck.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bghdrlig.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163qldmpfkp.html


<!-- 参考信息 -->