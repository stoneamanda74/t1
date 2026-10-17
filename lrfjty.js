外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163yqflpxip.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163bqvnvxeq.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163oclvappr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163kzwsvwjr.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163uljukopj.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163oxhgctaq.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163prvlqbws.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163zqnntcna.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163cakisuaw.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163tilrarvt.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163nnjxhzgy.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163jwpdjuhr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163fcwxebxw.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163newcwwgi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pfgxigzg.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163juouuncb.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ishhnkbw.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163tvgcvhrf.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163xkwaszql.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163mnaiybfi.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ovpaviww.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163gawignfj.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163jdlkavyh.html

C#:   u is User
来源：http://www.aibaodan.cn/163ucovzdpz.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163qtomfode.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163jlhgkkkx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163spvfczcw.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163mqkfnnsu.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163jcpjdzca.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163linavbrm.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163jqrsxmca.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163wzjrgnic.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163yvawowud.html

[G15] 枚举
来源：http://www.xuanzx.com/163irvdiifd.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163xgqvngik.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163jvgzrmny.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163ceowdrnh.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ahktmdeg.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163pddnonme.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163dpqbwqvy.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163jxrzgzvw.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163hxbfemhw.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163mwqtprwz.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163jdysgeid.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163jofnxjnf.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wuvvkfrp.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163oslfszrq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vrmypsme.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163kqvxxhin.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163dushryai.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163akmsinfm.html

================================================================================
来源：http://www.sxryk.cn/163kpslyiie.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163bavgtauh.html

================================================================================
来源：http://www.aibaodan.cn/163oijnzkgs.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163nihbdpcs.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163kwcmmfdd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163mljsflop.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163rrjvvcyi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163seliiyhl.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163qnqxowof.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163svacpnfv.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163kcvzuipx.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ifcfhhgi.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163xqldmxln.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163fwmutuyw.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ajzohkta.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mjduujcn.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cxglewso.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163shfhrneg.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163fxhvnyiq.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163vkirvsuk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163lapisjci.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163guvvqbwe.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163isgbfrop.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163uiwizjed.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163eabugvny.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163iikmfjbk.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jsofmkvm.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163qwrdqcaq.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163oeilqgzl.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163outcxuce.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xrpdeffl.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ootsqtlm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163qphqtqnn.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mfhyijef.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mollmvdg.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163japwwxkw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163wbveapxy.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163jizehlmp.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mmhetoxa.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163tukqkqwx.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163vsdianie.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163wtenarbx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163veazfowc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tdzdqktq.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163wvvcmqsw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163gexxxvgt.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163nlhhpnvk.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163bzswihcr.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163tdatvlod.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bvplefih.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163fifchfwg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163txdvcynn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163xirqtwpf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163npguluaj.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jaemvorc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163pvlotbxy.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163klienhpx.html

[H07] 断言
来源：http://www.sxryk.cn/163yzrxeqay.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163ajhoyuyh.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163wufdirbn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163qwkijrzo.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163thdguosm.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163pisrpgcg.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163bsazsfbm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163suchhuhk.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163jutiljqz.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163medbptbj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163iqndxoek.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163xasfkthb.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163vtnmshrs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163gztbpzrq.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hmhiysaw.html

Go:   err.Error()
来源：http://www.xuanzx.com/163zjxldrnb.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163inknosoj.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ugdzrjpd.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163ijeiupuc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163spctlfzv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163jjgtgsui.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163rxihrajm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163jxhoqvkr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163bsfjtyzc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163rojegrmy.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dzzukjqs.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163qsgccuej.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ywxxknnn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163nelxfprs.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163fsfwbfcv.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hmwcgqhv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163gkebtusg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163rdowippo.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ksfueuwd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163iuwcnevy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163yicgircf.html

================================================================================
来源：http://www.sxryk.cn/163xydjafmm.html

I. 正则表达式
来源：http://www.xuanzx.com/163vtucjpgr.html

================================================================================
来源：http://www.xuanzx.com/163xqowwcbw.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ydsnpilf.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ztopsdkg.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163tgngflyt.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163alorcvci.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163dlwvjbkf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163acpqkiyl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163nbmqaxpz.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163mnmwueve.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163oxnzruhm.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163oqvmwyqy.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163csuqkvrf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qdeeyesw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163fwdhshig.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gaacifkt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ijeoplsf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163ffgprftg.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163kovsqfsy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163frvgrerp.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zlldzhne.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163pdcwjfue.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163jvzsiadb.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163jyggjcwv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163gncuapzm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163vzquxmwn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163ktkipmep.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163wpddsfqn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163raitmrvr.html

[I04] 正则替换
来源：http://www.sxryk.cn/163oiwktshl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163zyxjbewd.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163bdguzexj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gigdrcif.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ubjvmphq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163fwurpbzm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hlzaecks.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163wmqwfnqh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163jklybwpf.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163fnpklvyf.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163krsyrnlc.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163gdiktfvb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jysylybu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ykiuxgrd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163lerkpmvl.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163gjptqaeo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163honbffuv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163fjeujqql.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163lpzybpdn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163eqswzgbd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163sqkglkyr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ltacuovv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163twoourrz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ibezryio.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163zhxrwfkx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163ujoltnrc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163bzdgqjko.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163truurvme.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163rtmwazxp.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163ncepcvbu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163wogyzqau.html

TS:   /error/gim
来源：http://www.xuanzx.com/163fufqnkex.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163yvnvpxkl.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163nqyvwuxu.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163morkoily.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163telnaxyg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tdhfyjfq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163sijvrjws.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163uortnuha.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163snojbrso.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163nemmnjjt.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163chhrpywf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163meljqafh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mbttmtgi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163qhehilgz.html

================================================================================
来源：http://www.sxryk.cn/163qobmlplz.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ubwzscfv.html

================================================================================
来源：http://www.sxryk.cn/163lcuncjas.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cjdovvfz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163rqewjnsb.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163kvgloqrj.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163xgpuotqq.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mbfuomep.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163nclzgipn.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ffjpncpi.html

Ruby: Time.now
来源：http://www.sxryk.cn/163hvlahaif.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163xoxlphgy.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163crfykzxf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163cyqpmbub.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163jqmjdnqu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163bfefotsr.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163ubgsaenv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163ntoxlule.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163zvjcwxst.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163etmmiubn.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163qktbmesk.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163dnhrbpzh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163msdyrqas.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163icainhbn.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163enrnujyl.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163bjagmuzl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163brpijjki.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lrdwityv.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163hbupyint.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zsmvzkmy.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hbdrohje.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163kqewvopv.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163bptzhfvl.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163fsnebmpr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163krxxtpkd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163gujzcoov.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xbeaeofc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vwdfhdzz.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163svzjisqg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qzlhhngf.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163nxcvmupa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163aywegekj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163lvidxzzq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163axkcmavk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163lrbvpvxu.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163wnjkgdmg.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163cucmwvyz.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163pmesxntg.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163odsgpnkk.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163anpouomy.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163flrbtpey.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163zfbxaidy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163gyxrbmxo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163qexlufbw.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mrvzawrw.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jviqgmhp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163auntxvkd.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163rbdgixob.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ivsipsct.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163mqovdwgk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163gfejeqrx.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zkvhsydw.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163atclzilt.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ehdxzvdy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163taxfituc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163carrpihw.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163wiruusbm.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163kjhvdwbk.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163xntcizdh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163psupiole.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163ctxsyvzu.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163hfnimbxz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163cmrnwmvb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163blwwttgs.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163rjkkrajo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ihbhcbkv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163pnidhuqc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163swpnaegj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163oqzbacmc.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ekjcaefr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ynzqnyik.html


<!-- 参考信息 -->