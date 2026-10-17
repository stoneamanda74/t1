外链999!wailian999！

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ibwixmig.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163utpdnnwq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163aoygumdx.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163icabedws.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163yvyhdawm.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163wpfmvbbe.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ibtdachm.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163wagjebxc.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163igvpcrvi.html

[G15] 枚举
来源：http://www.aibaodan.cn/163wamlmdkn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163olejkerb.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rctcbgvd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163yayxignd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163jitwvbeg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163jllxpvhi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163mhlzucee.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163efxourms.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163bxovfpnd.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163lszoitea.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163krcekexm.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163jgeyueie.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zfrsufjk.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kchbqcav.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163wxlzkadu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163xntjwodh.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163chfmnjte.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ojuhgfek.html

================================================================================
来源：http://www.sxryk.cn/163xgpaevuv.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163igvoxgqc.html

================================================================================
来源：http://www.aibaodan.cn/163fxohacwr.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163xsllheei.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163xxexfpqt.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163gfdipiuf.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163bpazgklq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ugoyjwce.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163wjqrpsdp.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hfjvsajk.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ksckzgto.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163oacvcuwk.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163hslvnzqr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163upyoywkg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wvxpntjl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tnplaatp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163olvcclga.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163kpqpvcyt.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163pntenrne.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rlwlwhjn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163oepzzeoc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163mlhwinbf.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163wnozyxzz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163kzwdshbf.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163dejnyapm.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163zamqramo.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163ghgqoebc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163yqyqgmtu.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kizzqbae.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163catufuud.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163elxxnzhj.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163iicenvzy.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ujsklfea.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zsyyarxc.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163myaaefcf.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jtylxwgz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163fqlcrccx.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163srbvmnbb.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163rijewzlb.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fygbzjxm.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163xmcgunhp.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ikhoaczj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163zppezazq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mizzicki.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ovfovths.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163xxdjjgkv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163zqgnikkf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163fmpsbrzf.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163chkplrny.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163swmrfhhp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163rapvjkor.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qmfevykm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163olzfifmn.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163xoctnsnm.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163thlyvptm.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163oubneuvd.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163aeyswbcb.html

[H07] 断言
来源：http://www.xuanzx.com/163xfqtmbzc.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163msokqljx.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fjwasppa.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jgiywhry.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lvlqzhww.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ihjoajcm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163hbapmoeb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163vkxkhhbb.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ftnjkvno.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163mrkahiac.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163lqpvqlkb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lfaawrxv.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vksklazw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163bmvkbylg.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163jodmrlqy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163irfqgqgo.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ctdfapkj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163lnsrbyjm.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163iyprkxtu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gbhrttkk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163uyzjdgtu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wrhsjeap.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163trwcmtht.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163ipyngjey.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jfzojack.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163vylualgx.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163enxivekg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163bhockxir.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163aoqwneay.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163jdedmtjm.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cjpxgiek.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vicsvzao.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ktvptazi.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tswjrbdb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163hpctbmra.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163xnawrjxn.html

================================================================================
来源：http://www.sxryk.cn/163wqwwkbtf.html

I. 正则表达式
来源：http://www.aibaodan.cn/163euxjxhrf.html

================================================================================
来源：http://www.xuanzx.com/163lqlfmdxx.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163nkyhfywt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163dimilfqd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163aafkndix.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163krcndkho.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xqetkuwx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163wpfdxuvf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163nhnwpelv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ygebiwvf.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163suzeekdg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163vzwzpljm.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163dtuyihmz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163tnwzamzg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163lenahuos.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163bhwceows.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163nkgnngnl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163fwxribmn.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163syookcpu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ktkxmmqv.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163hujvcptv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163uwrijmop.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163byrtpqxt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ihwwabul.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hqedtstb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163vxuyjelc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163asokihtm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ecdbrllg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163bbwqbith.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163aqxumdgv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163swjvfduh.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tuloapkg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163kgyywsqs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rbhjuemo.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163bjriwoea.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163obguache.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163njkkjpxd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163jefmerwd.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163nnvgqngb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163anzpanqg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163otalyypm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wuzibalg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163uslxrlcq.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lwhxeuws.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wxvvymco.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163chygkdvf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163dhaqhgxv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163rwawobqf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163jcthtfqd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163wbdgikct.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163xlwvlmdp.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163fjynityi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163lheeboje.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163yaiwgngv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ccpdjgxm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163rvhmcvrs.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qbxguzrd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163uimfzacz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163onjsfokx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163sptmpszq.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kkalkyzo.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163cgpfunrf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163pwfvxcmr.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163vufwhwyb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163bwwydskq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ksurdmdj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163apygdlna.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163faqbsyiv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kmtkxcbe.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163rlhxncsk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163nmqnwygl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163tnlovwqi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163lqbktneb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163dgcjrqth.html

================================================================================
来源：http://www.aibaodan.cn/163llijoieb.html

J. 日期与时间
来源：http://www.sxryk.cn/163auvduqwj.html

================================================================================
来源：http://www.aibaodan.cn/163uzfhbplu.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163auhzakni.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qimquiye.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xxqxbiip.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rykzygdv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vfxwjuji.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163fdgtnlum.html

Go:   time.Now()
来源：http://www.sxryk.cn/163fuxtjrtc.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xcfwckfn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163iovzarwb.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163oazjbyii.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kkczctxh.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163vmeavucj.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163bvdctgxk.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ccyuthjd.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163hnbfndfc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163svwjmlvs.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163cdatdcnk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163pltlttrs.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163scejnutc.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163eppuaubg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163alcpbpnq.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ctorvkrt.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163hnzvlqan.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163tlplawfg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163uxdnolcn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163sasybmzm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zkuvkhqd.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163fohdcmoi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163uggkpoan.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163lwkoswcj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163sgyxlgtk.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cpbkuati.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163amunwdil.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qdoxrznx.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163htneifak.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163tuifadyk.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163yzmwdkxc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163xeqvtagf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163smidomed.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163btknlauo.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163uqzuakuv.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163exmvgkkl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163pawsrhqw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163alkmzfpv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163krtjafba.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163dheoxzfl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163idtzmfmt.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jmdxirli.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163nbhugqcz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163fwpqxflq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jxpikzkr.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163dojwbtog.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163hqglsxmx.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bviofxty.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163cyautozc.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ffrnirvb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163bcngdnxv.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bkcuhbud.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tdustcuh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163gmimkvyp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vxvdrfpc.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vetgmlzz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mwvshqhz.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163gxrvjlgt.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163piwmzufz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163csxkkixf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163lupwnmpf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163xrivnwzb.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163zwcofzgs.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163vrhsitrd.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163uatbemqt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163zyublsjy.html

[J09] 时区处理
来源：http://www.sxryk.cn/163oiykynox.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163ejezmhxo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163ndewvdkd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163rhwlwwmw.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163nkmraipx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163zktqhaxm.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163bzsbfqrf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163yomajnss.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163eussogri.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163cthknyrf.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163hykwcyzu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163bldgncnz.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163trzabtal.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163evxxqsrk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163pmsqebui.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163ijftynmo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163tepamjul.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mkexbwup.html

================================================================================
来源：http://www.xuanzx.com/163bqwxlaji.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163yxxmmfoq.html

================================================================================
来源：http://www.xuanzx.com/163mdygcdwr.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kdjelhpc.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163drfokazt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ftqqxfmx.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163iolyqplv.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tpqqksoh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163kfdekrmd.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163utttadti.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dcaonuqo.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163luleofov.html


<!-- 参考信息 -->