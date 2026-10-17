外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163lsjlgfkv.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ejtognag.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163fhivzuol.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163dkrmgftk.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163jzirzjjm.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163pyxgcltk.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163bpsagkco.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163fcelyxdl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163juaozxoa.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163viayjkag.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163blofenvg.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163pejaoggq.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hulgfdpm.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163qwfncrcy.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163bbbxqpjx.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163yyoqhhkq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163rqvqxobm.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163vhysnovb.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tmnuletg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163izeebkrp.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163gpodrmwh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ettzjxmz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163fobjpwmk.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163sthvrtxh.html

Java: u instanceof User
来源：http://www.sxryk.cn/163cvlqozbk.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163vmpqjklc.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163sboaiuqc.html

C#:   u is User
来源：http://www.xuanzx.com/163gbgtepbn.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163cavyzwcy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163exiszpqt.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163aomplfkp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163egarmnnf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163abktwcsd.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163pehqnnpz.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163mnlrlmzt.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163gwzeqgmz.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ahvgbkvu.html

[G15] 枚举
来源：http://www.sxryk.cn/163hegeqznc.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163zfxgfijh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163zaixghty.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163svjgkbdc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163yrddnwoz.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163crxsxmwq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163vlzaaxgz.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163vjlacfdi.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163iamdzplt.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163znegkhcr.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qakigfux.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163fuaaokhj.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vutpmvza.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vrgazipq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163yxmtzaqx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mwppgnto.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163bypvyqdj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163fmnxocwv.html

================================================================================
来源：http://www.xuanzx.com/163hszjutve.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163xqedcjie.html

================================================================================
来源：http://www.aibaodan.cn/163ilkjkqoo.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163mxjronhz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163fprekwdu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163uxghtxaz.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163ldjjwkum.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163bljapwve.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163nffmjhwe.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163xjsqwxdy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163litrbidh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yqtjhyfw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163qlwwrlhn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163urnhwofh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163imcbhkul.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jwjndqig.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jkguzdex.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163daxwdgal.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163drqtfpvk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163jcucrefm.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qwdngrsf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163rpzwyszx.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kovhjpye.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zxyswewq.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ylrqurtv.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ltiktaim.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163tppcscpr.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163gtnwdalp.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ybekfoam.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163oxguysja.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163cjttgxru.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ldmzmnte.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163kkhxlgip.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163vtsaetpq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163rkjbktxc.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163xhblfnhs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163swtqzhxf.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163fgfgqnsl.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163lzxewzfu.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163pofygcfw.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ysgojulm.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ybekewbi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ejjcggbq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163aafvxrov.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163vroxlasf.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163eeuvfnew.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163piomeqlh.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ixdoqkbi.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163esjkcdtz.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cbburooy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ppgmhgux.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163dtizctca.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163repbxspj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163twmcbirh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163igdotrrf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163wsgmozoz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163uhskpfqs.html

[H07] 断言
来源：http://www.xuanzx.com/163hasembye.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163cfralkin.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fdptpidq.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163gndqgkxr.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163lqtmxikp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163lslroere.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163jdrdatkd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163krqonvxo.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163vkgrtpbi.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163zdofqsxs.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163cxldbftw.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163wpocnfqv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163shlogiic.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163bsurasux.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163fkrkbiag.html

Go:   err.Error()
来源：http://www.xuanzx.com/163dmwgeavl.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163iojnehdk.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163dhaoxofe.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163fzutwkog.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163bzfqclnd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163iitrtznt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dfiuwdjd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163rnclnqtr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163rintmjml.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163fluaehrj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163llodzunt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163nbyheysh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163usweunym.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ludgwxti.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163rzyqupam.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163sjfuylgn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163baffyadd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163pkogtmja.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163oygshmfo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163snrhhley.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163czfbavek.html

================================================================================
来源：http://www.aibaodan.cn/163oljodqcl.html

I. 正则表达式
来源：http://www.sxryk.cn/163lndormjt.html

================================================================================
来源：http://www.xuanzx.com/163kspmuwcx.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rhaoatab.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ztkkrwyq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163ewlbqpbl.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163wbeusafk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163chgisuum.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hspbgpff.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163rqcvxbzf.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163ceizqdaj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163pjpyemxp.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163snsbxwzq.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163xjqcjyfw.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163jlrnvdjf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163bfckpkix.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163pbxecelx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gnfgybqq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163xnjltouc.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163kxfbjxmm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163iaqwtatk.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163vfkgsdek.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ttsqxygs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163gwtupwjs.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163pfdkfzml.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163zfglzdlq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163xyvasyhm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163icofnskp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163bicilgmc.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163hwhjgraq.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163qvrhfckw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163inqgkhga.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163gwpbymkk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163lfthpuda.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163tuofcxos.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163yrjtgqhd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163xsekipaa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163tdsmiett.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163drqkwqof.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ezpjggao.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163fpuszkro.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163grhihbnr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163civsnifx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163txugpwjh.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163trujfonu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163lbcsodpd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vimerxwh.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163bkphlhin.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163kjumthrg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163nyzaqrmr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163svvdnkfu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163cmzvmxdm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hvmxcfdr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rvztovry.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163cdijojsj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pdqxsilr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wbtbxuis.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gwhonfcw.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163yxlsofgg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163aguniecp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jnqhnbzz.html

TS:   /error/gim
来源：http://www.xuanzx.com/163sgunlelg.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163tuniokto.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163uqiomkbo.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163edjvgoxb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tpxdfimx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163voqvwheo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163gqfjgwhu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kjxlhwmu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vjpxcbtm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ybtexjow.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163eioqznlp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163cdrfqmfu.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163gseyqucd.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163osdcsebo.html

================================================================================
来源：http://www.sxryk.cn/163rlnmkrbe.html

J. 日期与时间
来源：http://www.xuanzx.com/163mvasyuol.html

================================================================================
来源：http://www.xuanzx.com/163tcgyytzj.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zbywfacz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163mfgjkcem.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163youvherx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ageeddmf.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lxpuvitj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163jfbrzfbo.html

Go:   time.Now()
来源：http://www.xuanzx.com/163izvikbhj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163vtvnwyoq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163wxvejffa.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163mdpsxxsy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xhrbwqii.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rgasjwup.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163xxeojqkv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163yngmdapw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163pfvyvumc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163thkwchkw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fqgknggo.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163prtjcfjm.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tdkrqixf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163vucsxizt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163eflcmrsp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163tonrnzwh.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tohgezyt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ilhqzawr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163mkzaemad.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163qeyascmn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163yrfwrtib.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163cnmuuvga.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163dpqdqjkl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163xqnmyeka.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163ucyhhwll.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163cximlogv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ibrttkjc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163lsegenon.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163zxlmruks.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163gplcxvcd.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163rgjncoma.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jmrcwrnz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163zwmdzgji.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163jxpzmkav.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ahdrwqxu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163prfohlkh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wcagzgez.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163ijfmqisx.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163nlvbjmyd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163exubtzlc.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jzlvxizm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ymdhpqbc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163iqgfnjsv.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zqrtaoqq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163lxdctpna.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163htycphve.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163smdhmblt.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163trrvhirm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163vpvyympk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vuqdxiuy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163ruermefg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163suagzgar.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ctwzesvj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163lhlwpvcs.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163odhdoatl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rsvsrnea.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dtltpjqb.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163ucjkdsqn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163hjoxuctw.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163kajpheeo.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163univvkay.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163ycgekqqq.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163lqjmwpma.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163epjazfev.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163yzdwfybh.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163cvudzpxh.html

[J09] 时区处理
来源：http://www.xuanzx.com/163lpoanwgf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163nubttkkk.html


<!-- 参考信息 -->