外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163jomkyjkp.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zvjocmtn.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163vurtokby.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163olrwfamh.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163qobyvezl.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163bxqfxebs.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163kpkxttve.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163tvvawlhb.html

Java: u instanceof User
来源：http://www.xuanzx.com/163xtavsfxe.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163aydvjflu.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163xrjvnceu.html

C#:   u is User
来源：http://www.aibaodan.cn/163ihxbmbzu.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163eelslfrz.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163zdnqwhdq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163uaychpyc.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163hfxbhzgh.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ozqliltw.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zaivmepk.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163varcrvdu.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163whiqccyi.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163iweeblmt.html

[G15] 枚举
来源：http://www.sxryk.cn/163bjhinypl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xycknebp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163pfznmepi.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jrcsuayi.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163qkbjfedy.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163nxjfkoqv.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163qqbgkele.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jncbjhfx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163vvdkmobj.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163vijlcckr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163xmcafjpz.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163qxbrlgvo.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163bgwzweem.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kmpngwmw.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vpdxkwoy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163eibxnwmp.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163rudglkzw.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163lvkabvov.html

================================================================================
来源：http://www.sxryk.cn/163qlhprhdg.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163qaespegz.html

================================================================================
来源：http://www.aibaodan.cn/163zhttxegy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163jsvujklr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163pvprgcxg.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163njudbmhc.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163arvdxtnm.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163kevfjaot.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ywjlotxg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163jgxoxbaw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mabllivp.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163fqnqocwy.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163dnisrxvx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163blbbxvap.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163sibayelm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163omzermhu.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zsmdmrkj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ccvijnjb.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163iyawfpqn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163njbyvzfy.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163eesyhjlp.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163mvrjpiwo.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163llveevrh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163laqoxcsl.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rkesicaf.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163caeyogjl.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vtucceec.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163frylihhr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163kzrpvlgx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163uienqunx.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163dapfgysc.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163pzsbixfd.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163jwzkxtlt.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163frlirphs.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163hvcrdsuf.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163ozawyavc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163qeykokva.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163weyeunfc.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163gkmaxacy.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163hqdzfuyh.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163frfzcept.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163qdbdksel.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bgrimwrf.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163uccfbvpi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163kdthyeai.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163bdepkcpy.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163mlkigdga.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163wpsvrrom.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163frqyrsqe.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163apyorfbd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163kmtfrkfe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163clyeeayw.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163wssimibr.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ghxfovdr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163lglfiyyc.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163wiqcrlre.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163nqibjoxh.html

[H07] 断言
来源：http://www.aibaodan.cn/163vuwbpvzf.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zowbrnze.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163jgbobdsb.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163fbzbzkqk.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gccbselj.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163vaoucllz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163pelhqkfj.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163mjsxnema.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163dqxtvgmc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163kbiqjjcg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163tbokgmxt.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163njgxczxc.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mdmwaedy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163fftglojm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163jivpbsha.html

Go:   err.Error()
来源：http://www.sxryk.cn/163uxigzywn.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163euypevcr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cmommttg.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163pyxoypkh.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163gsjoqypl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163kkmgnphg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163mlpeahuj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163iinyuuoz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163fuvoxeos.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163vwhilsto.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vabzochs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ynjnrqwm.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163dqhljiyf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163xtkfxymp.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jkpfmlbu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163jxnhjbhu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fsdhbrfi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163pifddqjc.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163kntasbef.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163yqqawihp.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tfzvwrbj.html

================================================================================
来源：http://www.sxryk.cn/163edkdhtjk.html

I. 正则表达式
来源：http://www.xuanzx.com/163fjgysksn.html

================================================================================
来源：http://www.aibaodan.cn/163kbuinqef.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163pqinrrvz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163lawvzqrl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ntwpkppy.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163axwhqllz.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163zkwvufyp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163snhyjqwg.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163pyppvkit.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163kxrkkxrl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163yntqbkzg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163phrguwbk.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163igkatgxw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163nwtsnrat.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163fqufdrsw.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163vkzbhvhg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163txgtvdmh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163lzyrgbne.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wrykybqf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163okwbfmep.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qvobvhda.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163nqymybeo.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163noxpitry.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163elzfklzk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163vhhkdanx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163tdzrvvam.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163inesdbid.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163qytfxxry.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163etqnbyth.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jwpqydjx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163wkrpjqvg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ycxoiuob.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mghwlful.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fuzpwmhx.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163idcrdwhb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163ulhgxagp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163qpicerlh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163xmpuzmlu.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163eygrltpy.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jqerecid.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163zhcsmuer.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163jjabrhiu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163iarvwrom.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163vbxhqhuq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163knkxxcrl.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fhpiccek.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163jdqulzzf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163oavisjin.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163qmkghsym.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163rogbxiqn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163wyphnsda.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hlmspiqr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163wbhmadtw.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163xsltneni.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163rksnhhah.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163cabzdmca.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bqwbocos.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163aqxkgppq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cghhkrtt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163txacpndc.html

TS:   /error/gim
来源：http://www.sxryk.cn/163uzedjpva.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163thvyduwe.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163bxtywfqz.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163oebxxohe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163jvlzexxo.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163weutijuo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163tojbxiuf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163lhrpwgxr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ygotwpfd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vmbobhxm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163sbxcbldj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163sbvdgxjj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163uilulnix.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xadrxwpt.html

================================================================================
来源：http://www.sxryk.cn/163goctgjiu.html

J. 日期与时间
来源：http://www.xuanzx.com/163wizdzcdv.html

================================================================================
来源：http://www.aibaodan.cn/163hfzhsgvm.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163pdtehqmj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163nrmhoneu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163abtixned.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163frwprori.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rdpywlxq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163vdgdunop.html

Go:   time.Now()
来源：http://www.xuanzx.com/163nlmfjjbg.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163urszsjyx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163rhkszkcz.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163kpcheoqc.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pctbioid.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pnbohbwn.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163woldawxn.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163mkkeuarm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163uhgauawt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163bcobgoif.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ejwvowmn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163txadqils.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163mofkrjzd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163jyosqbnj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163nlkpvizj.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163tjusyufe.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163rgyaxyai.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163gxmwocft.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xpoxjcah.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163axmlqsio.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163xfbzljqd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gxdusxal.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163khyvhblp.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163uewiqjry.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ohldyibl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163yoqhpofs.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163rofnshwl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kmdilvob.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163eizqwwst.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mnshnlte.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163utlfbmsg.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163miyjtqbj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163wuccuvqz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163tlywqtqm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163madivskc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hixnxswp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163rxmhbrvu.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163vkxbkujx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163rqyjrwtu.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163yuivnqjm.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163kqqzaqmd.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jlmzwrfy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163yuyqfllr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163zmvbmblf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163stelvyzo.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163nlhiwmmu.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163avjrgbjw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163pxssavei.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163fktsnjkl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cazascfu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163rixvmnjp.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bpsjuvmw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fqiqqqac.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163xstdrcxw.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163kyzsiviq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163oapghckp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163gachdjol.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163ctyhtsfg.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163qytfrnga.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163iaqmeiad.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163yhrndzyy.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163sribjbga.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163lwxumnqw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rphioxhu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163mdfhgobh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163lguhuoar.html

[J09] 时区处理
来源：http://www.xuanzx.com/163qzvbsvgh.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ejknxlqu.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ponscpyn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163tormvpys.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163qjpxlgpu.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163eefhuzsr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163oopruzdg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163frekdkcr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163nuzsvzsq.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163jjgofiie.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163pkvfovzw.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163wcatvjiy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163cioyhifj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163clzwipwq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163wkfycpoj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163hduojyvp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163suspnfhs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163hqdbnpjz.html


<!-- 参考信息 -->