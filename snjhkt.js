外链999!wailian999！

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163wldsjkac.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wnzenrav.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ejafbqaj.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163rwwnqrek.html

Java: u instanceof User
来源：http://www.xuanzx.com/163vtytcxva.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163hapfwyvr.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ejcevkpq.html

C#:   u is User
来源：http://www.xuanzx.com/163srhfekgi.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163vlflijww.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mepaoasf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163rjqkbctp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163llosbvjk.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163kwcpxpez.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163dbfbvprk.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163cakrfdsk.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163bbavxcxs.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163hqoklasl.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wdrmfqge.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163gfqliaok.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163xqumblwf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163fosxwrqo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163rvnseaci.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163qqfseksq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163zczzyelp.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163imepyhtu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tjorggbj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163zfprysug.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163klpbqatt.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163unpuiahr.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ydgskdjc.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163uwdquzev.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xlswgeqx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163ubsfasbg.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vttujzcc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163flwtxuzh.html

================================================================================
来源：http://www.sxryk.cn/163gkkyjxkd.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163haqorvvn.html

================================================================================
来源：http://www.aibaodan.cn/163sklstiel.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rgpovclg.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163azarjizc.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163mqfqeuex.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163apwpucll.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163zttkeodu.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cegopuiz.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163usudlzqq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163jskzemjf.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163gcryviek.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163enkbzdry.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163zsguplju.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dneamsba.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vkrbhodr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163omrhbmxl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ejsrrgay.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163zflpogke.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163bbuvbxxt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ezstpwbt.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mthssyml.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163gyvaqlna.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xokhxdoh.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163ksgooytc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jjaukxjz.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163zbpeyvyh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163lxjanjbp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163pctstipr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163gzavmoaf.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163hincpjdh.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163dtefocsh.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163mwruaxeg.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163twsxgfno.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163gcsidwbh.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vralglpu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163xxbrvahj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163zlodjbpp.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lxdunccb.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163emkucnif.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163xhsgeaxy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163rxvrscdh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163dwntmqpm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163msfdswwg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163pchzlhth.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163minhbssf.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163csiqvbur.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xrlevjwy.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163oolqrzeu.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163sjxvmjnj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qacizoqf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dnwunwbc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163eyskevml.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163choigpfa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163lmepsufc.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ydojtguy.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163nqkoxeom.html

[H07] 断言
来源：http://www.aibaodan.cn/163vudwibtn.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163tknixnjh.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163lfqsgujg.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163igqtgxpo.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ohztvtow.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163pwfwllln.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163oeysxhka.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ajmgncjs.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cklbrwjt.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163lekiwjty.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163jfmknpgg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163acdlnloy.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163upkhpizd.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163tankmpfs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163tyzgldnl.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163drvwcnpf.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163yqxrbkub.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ffukerqz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163uiohujwj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xgeyvwac.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cbldkges.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163ikrvywyw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163sorbogic.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163zuiozgbb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163bvgunbje.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kqehgelo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qidjkirq.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163uqjimbib.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163krvulzse.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163qhglvzpr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lvlyosst.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dlvpmnbw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163oxetrvhs.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163qfvxihth.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163hgzlrwah.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163krtxjsmx.html

================================================================================
来源：http://www.sxryk.cn/163trkrpthz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163brmkpocr.html

================================================================================
来源：http://www.sxryk.cn/163voqfabkw.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qbhcjkks.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163hhnvcxcd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163szvvmvgg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163pkenpjtw.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jreckahc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gwgspunu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163leuarblv.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163buvfoixv.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vnfxquwh.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163xownofak.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163inhpwthf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rwlrktrd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163naahvles.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163azbvecta.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163obqaqwlr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163pzrqcncn.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ukfblywe.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163qulyvwsr.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163smddgfxp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163wngaswnk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163yqzpzjch.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163relqgpam.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163opsgvroy.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163viqjfcib.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163knqlzbfb.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163bshermgj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163schyupky.html

[I04] 正则替换
来源：http://www.sxryk.cn/163wqvwlpnj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xzfgxpwq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163jdlqnphj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163pebvedou.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rpdqwehd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163unzelwzz.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163brytkeqb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163qcxniect.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163qnohtmbr.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qtzpvhwe.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163sbgbpmte.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163whktetzq.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bwvysvgs.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nybhfdnq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lbjtmphp.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163bwyzbmqu.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gwfvkokz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163vqesglyr.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163kmyspnmp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163fvnmxgrq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163gfkpwnev.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lleukvzg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163oxiksxuv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163kpqwisfz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163mnwsojqw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163nkzoynfg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163bukocnqo.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163purrgnhn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163iggpzygg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163nwsyhrzz.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163uhyfrcoj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163dlxyvvop.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163eqpnvttj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163titjwihy.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163xzkdyszw.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163zqgurgof.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163arovmjby.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163sbgmmqpw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163izmilulj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nfglphfb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kfczjies.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163desqydsc.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163evuddols.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163iivgdkgb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163mzpdshig.html

================================================================================
来源：http://www.aibaodan.cn/163zawmcgog.html

J. 日期与时间
来源：http://www.sxryk.cn/163apqgpstk.html

================================================================================
来源：http://www.sxryk.cn/163fzkysnci.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163knsvunyt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163cdalyepa.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163fafajxhd.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163wkyhftkh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kfwqjusx.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ovjjssot.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163lozvgoji.html

Ruby: Time.now
来源：http://www.xuanzx.com/163xkyenbki.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fmdzrhld.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163wgziiglo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mdjhsxum.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163idxnziom.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163elcxkcco.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163gdnzytda.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ipmsgbox.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163eisxsarm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163rdivuxsp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163obgkzehc.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163rlcvcxlx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163nrlflvlo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163zctrlain.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163esoptvke.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bcriuwdq.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163larkhufa.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163apfibabe.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163fuuhiszi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163omtdstik.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163dmaghdlx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vpggbxjd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163yqlcsrsg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163quymtapc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163djeybcxr.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163lvkkwnug.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163tdugeaoq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163ikgriuhx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163bwbosvcw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163olnkdwjv.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163hmoynnvp.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163iaftiyoi.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163iumowzih.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163gxwvehqt.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163vpnjpcxq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163gxacpdos.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163qeiofekx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163doducltf.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163spdybjfh.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163qrsmpumm.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163eeemegut.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gdudnubg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163gmdbrczl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163excwkedm.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mlzmhejj.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163kyfajdbv.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ccrjgdtz.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163laxtdkoz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163asfcuvjr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jobvqqtz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163umgdyrqg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aqseceai.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163bumlezud.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163fdmivmuf.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163phwnoxzu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163pqcmpbyj.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163qdvtzvpj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163dgavjsmv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163ngplaxky.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wruzocvv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163zlfxeobu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xqmwtknp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163xvvdefby.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163qxnaavpk.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163sfiveziy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163tfjwyxbc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163sltcztbg.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163bahgbzdc.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163uijvewsw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tkkwxana.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163gmhlddck.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163szprekpx.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163fpbojnem.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163lvkaxgdy.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163hwrrlwht.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163trvxfwib.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163mlhzofrq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ihbeszgu.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xhoxubbo.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163orxurrtj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163ftujjisw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ihhtojtr.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163rjvksljn.html

================================================================================
来源：http://www.aibaodan.cn/163vapwmukf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163bmbbvfyl.html

================================================================================
来源：http://www.aibaodan.cn/163yphdkrsi.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163sihysjzg.html


<!-- 参考信息 -->