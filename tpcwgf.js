外链999!wailian999！

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lgifpdsq.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163rwukubka.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163epiecpam.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cehcdkoy.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163sowqrobu.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ptjdqcva.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163jtibrfui.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163pagixnel.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qvznjhcm.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163oagsudel.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163mdehkomh.html

C#:   u is User
来源：http://www.aibaodan.cn/163xcinnkhh.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163pjhuyfbm.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163hxtpomst.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163qxanfxmj.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163tklummcc.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163fkyzqwne.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163nydgceyl.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163xlczdlet.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163hiexsrgo.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163uvzexaji.html

[G15] 枚举
来源：http://www.xuanzx.com/163izoqitye.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163jugxoial.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ursptgrs.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163tuqaqwly.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163nclwbqbq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163hnmsmbrb.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wrzkmjhr.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163rnhvwbdd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163egomflpb.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bznccjqs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163fjvealqb.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mndecazx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163lofxomgt.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163amkpboyx.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163jnukzwbl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163gicdwqoq.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163qsvihdhg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163ehlonzov.html

================================================================================
来源：http://www.xuanzx.com/163ssdjsyqp.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163uaryxbwe.html

================================================================================
来源：http://www.aibaodan.cn/163mvylnzqo.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163ajuevdgs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qpigixgl.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cbxnhxrs.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163dsmwyjzb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wmullvya.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163rxcqxtsd.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163crjoppes.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163fasnviaw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163ailmzlew.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163auavguae.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163mwokhrwn.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zhtbhbwq.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163qfoekdif.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163isgwzclt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pzpvywlx.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163axajxtrn.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163lxeccodk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163wwuobgvi.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163jbsqbwkq.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kwwdttsq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163fonspcwt.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163yegiwxwt.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163emmzedcm.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vfeynquv.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163gmewgypn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wxuojtyt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ywubbcil.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163zxabqqnt.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163avhrrtiq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163wnbefykl.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qoclaqqv.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zedieqbw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163myvylewt.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163eslycaob.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163efjqrjbv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163unjqovcs.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163xpfzjbdk.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163hewhhazf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163lmxydcgu.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163tiyuwlic.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163aujcxaul.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bbwhzqzm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163whookxgv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163oxysfups.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163gicbtbgz.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zwvapbau.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163enouxtni.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163xxgopmyy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lnqdmpxd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zraqwjnb.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jibfswis.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163kxwcgvpi.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163wprzwlmd.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163jujxuouo.html

[H07] 断言
来源：http://www.sxryk.cn/163nkenrjnm.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163sidbdqdd.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163perwmshd.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163puhgigwn.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ronqoxwf.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163hbvdtdun.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mnyfckrb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163paynszyg.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163gldlcqee.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163jvuxpenk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163apcxwhgl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163umwekwes.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163kuodktyn.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163fkpnnmmj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163sgmkxupg.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163loczxvxm.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163naxabyeq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tagepoqq.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163bnleozxt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163mkttbzdf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zignepuw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tduebyyb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163zyanttne.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163msjwelop.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163tjsfriff.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163zryeiupw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rfjcoeiw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163lrprpaiz.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163lsjacxoy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nyruvmwj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ayrthuxy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xjztlxnu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xvgargec.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163kbtowumf.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163qaauklfl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163wraxoodg.html

================================================================================
来源：http://www.xuanzx.com/163zjilpwmv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163jcisydtp.html

================================================================================
来源：http://www.aibaodan.cn/163stjegdod.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163eijoythu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163msewijgc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163arrcfnvv.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fpytxzgh.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tqfeiynd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163qdzqclxc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163aolvpjil.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ocjmcfde.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mddlzhab.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163mwsschhh.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163kcrihbmd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xsjvfqbm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163xnoebnhd.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163bgqdxeyn.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bylnqjiv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163iycvtcbw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163rjsgdyel.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163dsmgzpgk.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163eosevdqs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163bksjeers.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163uvlbstrm.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ljbmabot.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163ateztlsd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163xxwkbhsf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163criksjir.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163fbkhlnzl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163zcfyojnu.html

[I04] 正则替换
来源：http://www.sxryk.cn/163awlkhwaw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163armprsln.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163iertqwkl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ofzpbgqw.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mbepmvod.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xupkxzql.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163utpgqdvh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163cttufshg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163xzbveasj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vmypfraw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163lnlzyutz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ilkjvomj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ufikelkh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163oepiohho.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163raqlnsem.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163ihciatqc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xzjmwzjw.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163xxikhscq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ydqxueet.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163aycmlotw.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qkoeamgt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163eznesltw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163nwzsnmpl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163tvqpyvlk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163vrhsrxga.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163ijoyqlxz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163aiukqpno.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163chhiewqb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163xbtfazvt.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163vfwpmdiu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163mubkmbdm.html

TS:   /error/gim
来源：http://www.xuanzx.com/163jbfefqde.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rjvwzsdi.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163tjckminh.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163igkqdyrp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163ksjphard.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qxtzhqjg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163yxmbackm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163uzugbuho.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ymjrfkah.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163tbbfkxyx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163agziffmq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163pxrcengd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163ewobiymm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163mjmpvpfa.html

================================================================================
来源：http://www.sxryk.cn/163puevfkyr.html

J. 日期与时间
来源：http://www.sxryk.cn/163mkdrhatd.html

================================================================================
来源：http://www.aibaodan.cn/163qqcfyynt.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163phpglrpr.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163wztmrqlz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ovuhszym.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mnhywtlt.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163vrgrasjn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163mtwodoaf.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163dwrnjvwo.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ennxbayn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163idlzvcci.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163aikkoked.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163hqskxvxw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163lggjswrr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zqcjriel.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163gackcxiu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163uepxpasj.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163lddghsoy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yeonswzz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mnqnoalm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163uslimjnk.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163kwbeuexh.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ueelawrk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163akwsxwhz.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163lhlegtzt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163qzbtgeit.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163lbqapxoq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ejolekgk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163vlgghhel.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163kvdnoxfi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163pqhrrctm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jsofaizx.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xrnbnguy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163exgodylk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zknitrdu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ksyshukb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163qmhsabka.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163dxstwgty.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163ibrhqezb.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163wrvkvlvl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163bbetfkqp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gsbhilef.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163etcnkqru.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163kxqwizko.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163kwdpipal.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163zahewhmf.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163rzfyheyb.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163qgzlosge.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mflisgde.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163amvpwllg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163nxzrtogt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163lrofjeos.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163nxyktweg.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163tboixayo.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sxoxvupv.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ajpqgwcd.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163rwgdwjal.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163mwomxcxs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163tscneacf.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163arnkvcnp.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163fjmxlmxy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163onbxvrtx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dpvnvvxm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163jyamuchy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qbrxsnti.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163kodtuohd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163eulzenuu.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163obaguptd.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ecrujkyj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163fgzdmfws.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ynjuxcin.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163twznkmwt.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163uvdqufpj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163shxhmnap.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163qdjkbdpe.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163zvfujcfv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163pqlqggfv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163wjbewail.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163ywfkvtkl.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ygvghdva.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163oajneanv.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163hlkgzkqs.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ycxiacug.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vgnsjidg.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163vwtpnoju.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163grenqdgn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163gxgorpha.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vhbgckzi.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163zfajwjkw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jihdyvps.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163xxswadra.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163gpbrfhgr.html


<!-- 参考信息 -->