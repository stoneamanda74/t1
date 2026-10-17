外链999!wailian999！

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163natanflx.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163xcwvwyiq.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163ddzhhiyc.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163zuzcqypk.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163hnurxrdp.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163bogpslam.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.aibaodan.cn/163rynenhma.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163nogpkzvl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163rhinoeia.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163upuxfpve.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163adbwrhcu.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163riazojgk.html

[G10] 访问控制
来源：http://www.sxryk.cn/163pffsecur.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163crzbyzou.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xnaeuqym.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163yyijcsuf.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163xjubbejb.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163bousbbsr.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163lweytwmw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163vhhyoctu.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163jotpsgja.html

[G11] getter / setter
来源：http://www.sxryk.cn/163zuyypgmx.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163kseavcew.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163fufxwwjf.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163nbhjdmfe.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163ffmbvzjn.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163hxfqrcyz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163boyxibcx.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163tdwiljni.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163vrmrkmmg.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163laltakdo.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163apuvsqbg.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163fovvkjyx.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163tnkyjvmq.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163qayvbbzx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xlqvzmyq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163nlrmidwl.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163hdufxaaj.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163hxwpurje.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163wrzuymoi.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163wbxthbqw.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163foyoddxy.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163amqpixkw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mrqlfmsd.html

Java: u instanceof User
来源：http://www.sxryk.cn/163dcbjwyqx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163kjuypuil.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163kfhwpfzg.html

C#:   u is User
来源：http://www.xuanzx.com/163cbeihipz.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163uxhzpcfi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163jpbsoobn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163heamqijq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163eueqjbth.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163vwpdsarr.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163krktqeym.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163jzvtvksn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163cgchgpdr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163dwnjhkkl.html

[G15] 枚举
来源：http://www.aibaodan.cn/163bahnnscy.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163kxrtasgn.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163txvooazj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163gzokbfzt.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163atwfaoyc.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163zbirgbgr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163mzrzhyul.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163rmpsbgdp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163gahqcdpy.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163nrmsbuel.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163mxdsnkii.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163aytkskrn.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ntswonfs.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ynqenqoz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163xgfmhbnw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163orwkbfgx.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163sgkddwar.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163beqwzmwz.html

================================================================================
来源：http://www.sxryk.cn/163ivwxvito.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163abtbycer.html

================================================================================
来源：http://www.xuanzx.com/163pbpbwvmp.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163rpegkhzq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ppmdrdua.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163tamdjnkv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163fuzuvqks.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163cnyaivzk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163fqfqcwxx.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163jkppkigj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tqmejeeu.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vhybtixf.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163bpeqifwr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163dtyzpfmu.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pbogjsqr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fdctkztr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163jxdmwcbd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163txpqtxzv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163egdhdmki.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163oxlnbvmu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163oajyotbf.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163jxvwfsaj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kjujqkqn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163mawxzkli.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163euiogcaj.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163bncbqbic.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aioqtncx.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163gzqybnol.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163tuvbalvr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cpqbqgzr.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163qshjkykl.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163iqvuezmk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163gpztspta.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qcfcdqyh.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163xjxwwomw.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163zjazdsuo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163yvvkhlak.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163sasewgwd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163sshjtugn.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163jtbtmzqc.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163eouvbbsz.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163nkerdrqf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163dfwriknu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ujgbskla.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ryztxpwk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163jalrglbs.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ctvncybs.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163omrzaznz.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163svpktblx.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163luaoyqnp.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163rohmbpww.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163zykypwxe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fzsoogwk.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163qoohplio.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gkgnssep.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163pxpscbsh.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ehejraxm.html

[H07] 断言
来源：http://www.xuanzx.com/163xpffkqgm.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163jxntciby.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163kqlheatm.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bxolygql.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163vwjbvcxv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163veimjqfd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163elmbindo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163yyftzxvf.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mqcgwknc.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163jnyzxnjj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ykoopzrn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163rwcdurwe.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163cjymquie.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ybvaybhk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163uzydndjo.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yfblrjwh.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163imoppkgb.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163hryihlkh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163fytsxksw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163peyqyicm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163drazgbbm.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ieakburh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163leorqcgc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163rubvdmsu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163laywhxho.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163whcbgbsn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163znuhtood.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163smuldsmp.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163kxkruvdg.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163omgryqjy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vgojbwvq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vzocjhgy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ncduvrsf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163fbegoewh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163isdfzxng.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tprvxxxm.html

================================================================================
来源：http://www.sxryk.cn/163evciaujd.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zzvxeebr.html

================================================================================
来源：http://www.xuanzx.com/163xlcbgkkd.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163sekhcmnr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163mmxfjonp.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163rgjjjxls.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hrjpauay.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pzxhpviq.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163sjjkkxbz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163xcpzlqdf.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163mfntnwak.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163scvamvki.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163gmnmlvyt.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163zhlexqiv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xvnqzudj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vgcobuql.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163vlxypdse.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bkpbxkzp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163kjebwgnx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163aljxtcoz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163aeokbchc.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163fflcadkx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163howkgsnj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163tvqibdux.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qetjitsy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163hobuwxwu.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163xbtblxan.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163yqqnguik.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163pespkvde.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lvkrtxaj.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163jmxbqtpc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163uflbltld.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163btzrqhlt.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fkbglbzb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163clcvhota.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163ecrubnio.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163emoksxpe.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ldnoepas.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163wdozuqor.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163youiiwjw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ipkobcuh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163fhvxqomk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tmlgiqmm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163gnobxmwn.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xptdvquz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163rtpvxsua.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qctiedii.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163scwtlthl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ealxbufi.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lokummtu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xvtrsebg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wvxbuxut.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163fdciusew.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163pkearplb.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163slqtdomd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rzzujlxe.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dtdtqous.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163vremvqzl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163qfdojdes.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163wwgaafbd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ibhmvuww.html

TS:   /error/gim
来源：http://www.xuanzx.com/163oclaynaf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163hbyhztlh.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163tbienxxb.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163eilzribm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163gvexkelw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163kvlztzub.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163balrxjvq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163sjpzafga.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ctdvyuni.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kyqymhye.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163vmepelsh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163azpuiqwr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163qzpixqks.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163grljdaxm.html

================================================================================
来源：http://www.sxryk.cn/163cpszuvsc.html

J. 日期与时间
来源：http://www.aibaodan.cn/163nqgbuwgi.html

================================================================================
来源：http://www.sxryk.cn/163lgnnlqgc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163gltdieqj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163avhqkolw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xrbjcpba.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ysizwncb.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163wwncsxob.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zjgscuwx.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163qoladfcw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163uisyzhzo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163dsuguwgd.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163daslvsvo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163foxcqzfd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163czmousys.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163unfoebwl.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pxadouyo.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163wfykbgkp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163icjwzutn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163oacrumau.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163vjueyhpt.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163ksulzdgf.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bvvoldrk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163bbomhtva.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163wysobavf.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cuhykihu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163wtdrklex.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163eakgpvjf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ontqiuol.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rpxmfwdz.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163lvciptof.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163znwalamw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163loqdqquy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163arivqvjl.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163fnzkence.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163bxwqskje.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163jfflgqnp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vgyaooao.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163tgescqsw.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163cpayhcpt.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163eeulryhf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163xmwxbdzr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163llxoaais.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163nieavjtu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163eirtasri.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163kvdirbey.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163rimjkxuj.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163rpeqapbt.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163behhdlwa.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163kycfjoyt.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163jjnjjoff.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zdmclona.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163oiwvpyyd.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ulmqlgji.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163lttpfczv.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163zixsalxp.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163nfeuzcwe.html


<!-- 参考信息 -->