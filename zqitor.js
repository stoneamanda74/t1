外链999!wailian999！

Java: class Admin extends User {}
来源：http://www.aibaodan.cn/163qevfmjip.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163mtairwpw.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163oamujvfb.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163uqzkqced.html

[G06] 重写方法
来源：http://www.xuanzx.com/163vvdanfnn.html

Py:   def greet(self): return "admin"
来源：http://www.aibaodan.cn/163mnemwifq.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.xuanzx.com/163jzbgnvnz.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163hzjonmyb.html

TS:   greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163hgklohfy.html

Java: @Override String greet() { return "admin"; }
来源：http://www.sxryk.cn/163yxrglawy.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163mpxdhlqt.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163vonryrud.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163bentheik.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163qloltmdq.html

Py:   super().greet()
来源：http://www.aibaodan.cn/163dhfyhwra.html

PHP:  parent::greet();
来源：http://www.xuanzx.com/163ltmisril.html

JS:   super.greet();
来源：http://www.sxryk.cn/163cmobstmi.html

TS:   super.greet();
来源：http://www.xuanzx.com/163tupzydux.html

Java: super.greet();
来源：http://www.xuanzx.com/163kgdiwdgp.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163hmwpxhkb.html

Ruby: super
来源：http://www.sxryk.cn/163nvvppcml.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163vyvbjhzf.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163wefnllks.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.sxryk.cn/163pknjhgpn.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163gqigmzmz.html

JS:   static f() {}
来源：http://www.sxryk.cn/163pljqxehf.html

TS:   static f(): void {}
来源：http://www.xuanzx.com/163roxzycdc.html

Java: static void f() {}
来源：http://www.sxryk.cn/163npdoxakk.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163kuhusjok.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163dlbvqrrn.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163bacwckbt.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163kmddgoyl.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163miiszhzf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163oovgitbu.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tlquinmg.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163mtsfbjiu.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163ooumkhxh.html

Go:   type Shape interface { Area() float64 }
来源：http://www.sxryk.cn/163wuvcixld.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.sxryk.cn/163tfztxlef.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163qfwxqeov.html

[G10] 访问控制
来源：http://www.xuanzx.com/163dpolqtef.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163nwdagohe.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163gptjnytf.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163dmswyxka.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163idhzknuw.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163pnxzbnxa.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163rxrgzkvy.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163gytgsiak.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163mynrdyyl.html

[G11] getter / setter
来源：http://www.sxryk.cn/163wrmhhaih.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163hyejhyac.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vnirfvet.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163ehlegcda.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163pwqrqlkw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163peqvoaoq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163zqhjfeba.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ckxsurot.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163rxbokvdz.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163snwcydxq.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163drfgigcu.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163ybduiqbl.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163nsvlymqr.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163ocokidyr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163iomnqofu.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163ntplsgqv.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163hxzszoms.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163byylahnk.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163rjuwyxzl.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ccsdcezh.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163yenfbxrt.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163awczvqfp.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163wfswkiek.html

Java: u instanceof User
来源：http://www.xuanzx.com/163nykcfdus.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163xqhvfkxq.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163eszkerqy.html

C#:   u is User
来源：http://www.aibaodan.cn/163hdyzcwrz.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163mwhwvhxk.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163pdtfsabe.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163txmukfiu.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163xjzkqpfo.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163lznpxvpx.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163eqjemzcn.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163tejctplf.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163bqyskczo.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163oqlkslrt.html

[G15] 枚举
来源：http://www.sxryk.cn/163biszojtj.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163awcwxtuv.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163kzymhnmn.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163guvjmbpz.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163utrmxaxy.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163bclijnlc.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163sohkrqww.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163lojhpmki.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163vdtsqwyh.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163qsrmxbgu.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163obmxshve.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163kpbnlwdt.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163vyvterkj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163oxltkcid.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163birbrozf.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wudiwlxv.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163dsoanzwa.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163mczuvrwi.html

================================================================================
来源：http://www.aibaodan.cn/163iapxvcpi.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163ahdohzxb.html

================================================================================
来源：http://www.aibaodan.cn/163txtchbyu.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163bwzefygb.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163tkcjdjwo.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163spphvueq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163nvughjop.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163mwynvrdv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163eajgnbbl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163egsczgkh.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163ctutznfg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163ealxedpq.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163sqsgqghp.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163jkswjqaz.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163vtwuvdst.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ftvinmcl.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ktvfzzyf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163dodqncig.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163uhrrtljy.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163hwfjiqet.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163czkyxfge.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163itltljdn.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163nawpfpbn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163itznnure.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163hdvmmovy.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bmlekovb.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vondtask.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163xxvelqfo.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163amnlqctw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163ywcglebc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163dlnhbbij.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163snavrdzm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163rspdcgcj.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zhrlfwod.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163aunaliib.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163tdvbaubi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ksramhce.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163uwccttti.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163jhhsmofz.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qnfghnnp.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163gmzehusk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163kknbhqyh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kvlnxbwk.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lymjpjgu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ukiwevva.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163bappsvyl.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dowwchmd.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163frrtnykr.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163iiqpfwki.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163blbqgmcg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163gogoljyj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tkwyumob.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163afcxyyba.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163oizbrarn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163hujnzpkk.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ushyycam.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163ldwlkyrj.html

[H07] 断言
来源：http://www.aibaodan.cn/163kftefvxb.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ajfyugnu.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163bmlkquqm.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ejndxjyy.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163eiybvaex.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163ujrmbgbf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163eovqcrlo.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163knghgxlp.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163lpgyaygi.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ibdvblrt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vuqfpqpf.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163oqgtqjuj.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163hdekqodp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163sfcyfolw.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163xeodszkg.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163zvyalsod.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163rhxqlwri.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163rqxhpyar.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163mnsiqvnu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163dkfxdjhv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163lghsdxth.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163hzorlwys.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163qbrcrphv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163cermefgo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163khzoqybv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163acevjweo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163gildodpz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ywfpajfy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rfaoltsm.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163izznauvd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hkduurki.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fiagxhan.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163cvgswrwp.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163svdvkofx.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ulleisbv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163lophfiyq.html

================================================================================
来源：http://www.aibaodan.cn/163fjadfplu.html

I. 正则表达式
来源：http://www.xuanzx.com/163mdgedwli.html

================================================================================
来源：http://www.aibaodan.cn/163rhainmkv.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163spmfgqzc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163zjhxxefi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163uweldezb.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163mdccwqdi.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163iodhesdk.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163wtravcdw.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163jqsxshwo.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ghyugzei.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163fqrirycc.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163jymglbda.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163vkcqltxh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163aoxwxgrp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163mzqgiljz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lilsyfzv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163lmwhvioi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163veounyfv.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wkrmuzsd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163nscoolfb.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163rnpjxkcw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163xwynbszs.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163twpnmtxe.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mqpofxrl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163naqjruzn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163geeiatpv.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163imxvmtqk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163zczegsmz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163zgawaoje.html

[I04] 正则替换
来源：http://www.sxryk.cn/163rhriwsff.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163fqebvmid.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163awvilxwm.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fbahegzd.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wpdvfenv.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163dvadbzwt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163eaflcfgd.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163odsujjcb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163zhrpavjv.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163ezhtolfp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163vvjhzkup.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163tiljhhld.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ixtoolds.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163vgxutuex.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163vxdqtvbx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163sizhmvuz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163owfuxhdy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163fgbuhssd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163qhmieqqp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ugvrqwgj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163qckqpwxt.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163vezzvlqq.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dbtaunda.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163lxztwcci.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ilrxaycx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163laapozir.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dnmopnon.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163uwvybvvj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163qtviykvx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163coqsjcrt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163jaurkdkf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ayltrjsm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gqetnttv.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163klqnawsz.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163mwcejesy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163acyutdxy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163hgjjqhzp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163keozwtvy.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ekovvoku.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163dsoqewwf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163agdyamkv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163nqmqyqgh.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163vsbqjfir.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163kzqzunzm.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163bpbhjvgb.html

================================================================================
来源：http://www.xuanzx.com/163fdsixtke.html

J. 日期与时间
来源：http://www.sxryk.cn/163iqhyqivr.html

================================================================================
来源：http://www.sxryk.cn/163dnmpdxcp.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163vgrearzz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163xaeqgknz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zetbxedr.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163igzlcgrp.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rmazueok.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ewqgmwqw.html

Go:   time.Now()
来源：http://www.sxryk.cn/163ndnpxqgj.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163qkcbodfy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163wohvanro.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163oocicbmt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163gwlmjvsy.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ogvbqmne.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163tdjldxhv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163egtruggx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163rnjdwyiz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163iqbisous.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bkrxokfi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163somkbesy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163rvlkjjfm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163djgvicbx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163pajdyybp.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hrrgphgh.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163npcwpywp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ubpmxfqj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163jumzujdy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163jzrerhoc.html


<!-- 参考信息 -->