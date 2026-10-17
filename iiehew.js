外链999!wailian999！

JS:   this.name = "x";
来源：http://www.sxryk.cn/163drzdshdg.html

TS:   name: string = "x";
来源：http://www.aibaodan.cn/163cusuueol.html

Java: private String name;
来源：http://www.sxryk.cn/163vjhaexiq.html

Go:   u := User{Name: "x"}         // 结构体字段
来源：http://www.aibaodan.cn/163dkkvosnd.html

Ruby: @name = "x"
来源：http://www.sxryk.cn/163bxmraryn.html

C#:   public string Name { get; set; } = "x";
来源：http://www.xuanzx.com/163memcdkap.html

[G04] 定义方法
来源：http://www.sxryk.cn/163xjyxogjg.html

Py:   def greet(self): return self.name
来源：http://www.sxryk.cn/163lctcegfj.html

PHP:  public function greet(): string { return $this->name; }
来源：http://www.xuanzx.com/163uzrxxdrc.html

JS:   greet() { return this.name; }
来源：http://www.sxryk.cn/163plvhlfzc.html

TS:   greet(): string { return this.name; }
来源：http://www.aibaodan.cn/163fhvxptfc.html

Java: String greet() { return name; }
来源：http://www.xuanzx.com/163tymabotd.html

Go:   func (u User) Greet() string { return u.Name }
来源：http://www.sxryk.cn/163bycrqtbx.html

Ruby: def greet; @name; end
来源：http://www.sxryk.cn/163nocwxvnr.html

C#:   public string Greet() => Name;
来源：http://www.aibaodan.cn/163itmdruis.html

[G05] 继承
来源：http://www.aibaodan.cn/163pqaoeblj.html

Py:   class Admin(User): pass
来源：http://www.aibaodan.cn/163gtcmoepn.html

PHP:  class Admin extends User {}
来源：http://www.sxryk.cn/163csbmpzil.html

JS:   class Admin extends User {}
来源：http://www.xuanzx.com/163ywhvzxgi.html

TS:   class Admin extends User {}
来源：http://www.xuanzx.com/163xykwjoqw.html

Java: class Admin extends User {}
来源：http://www.xuanzx.com/163edfruotl.html

Go:   type Admin struct { User }     // 用嵌入代替继承
来源：http://www.aibaodan.cn/163nkfvedsg.html

Ruby: class Admin < User; end
来源：http://www.sxryk.cn/163xiayptqt.html

C#:   class Admin : User {}
来源：http://www.aibaodan.cn/163jkpriwfu.html

[G06] 重写方法
来源：http://www.xuanzx.com/163ukrgofwq.html

Py:   def greet(self): return "admin"
来源：http://www.xuanzx.com/163vmewkizn.html

PHP:  public function greet(): string { return "admin"; }
来源：http://www.aibaodan.cn/163zuobwtqt.html

JS:   greet() { return "admin"; }
来源：http://www.xuanzx.com/163qurvprxt.html

TS:   greet(): string { return "admin"; }
来源：http://www.sxryk.cn/163antnebgc.html

Java: @Override String greet() { return "admin"; }
来源：http://www.xuanzx.com/163mfqvtxke.html

Go:   // 嵌入类型定义同名方法即覆盖
来源：http://www.xuanzx.com/163atjomwqe.html

Ruby: def greet; "admin"; end
来源：http://www.aibaodan.cn/163mdnzdcsa.html

C#:   public override string Greet() => "admin";
来源：http://www.aibaodan.cn/163opgxruwq.html

[G07] 调用父类方法
来源：http://www.xuanzx.com/163uptkpjvc.html

Py:   super().greet()
来源：http://www.sxryk.cn/163zdmqmrce.html

PHP:  parent::greet();
来源：http://www.sxryk.cn/163hdsfqxby.html

JS:   super.greet();
来源：http://www.aibaodan.cn/163qqdiayvu.html

TS:   super.greet();
来源：http://www.xuanzx.com/163ptxolhqg.html

Java: super.greet();
来源：http://www.aibaodan.cn/163ynuwxpcr.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.xuanzx.com/163kfirpziv.html

Ruby: super
来源：http://www.sxryk.cn/163zolpdouh.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163fbkwjjgt.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163dssfyxuu.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163jletoojf.html

PHP:  public static function f() {}
来源：http://www.aibaodan.cn/163ahjlpngy.html

JS:   static f() {}
来源：http://www.sxryk.cn/163udxoxgcp.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rruskllw.html

Java: static void f() {}
来源：http://www.aibaodan.cn/163owsdyurb.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163jokrbmmu.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163roqcoceb.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163sfzdnjgu.html

[G09] 接口 / 抽象类
来源：http://www.xuanzx.com/163hgztjkhf.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163vzjlhsid.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163yjasqgry.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163dmvpjjdr.html

TS:   interface Shape { area(): number; }
来源：http://www.sxryk.cn/163vjyyyrgh.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163sqdfzgww.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163ylktuhws.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163qesrdrmn.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163alcngmoz.html

[G10] 访问控制
来源：http://www.sxryk.cn/163qxygkgnk.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163flwqtynb.html

PHP:  public / protected / private
来源：http://www.xuanzx.com/163xarbtidl.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163fidfmgfw.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163odwlaxdv.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163vxgojoid.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163fqlnbwiw.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163vamhnkxq.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tmseynrh.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163podpgbbf.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163qtfolfiy.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163vplpnyan.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163jwmfnitq.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163hhevcdsg.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163teafepiz.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163ardbenrf.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163dyocoryq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163yevswqfw.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163iswjipns.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163pocmumbc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163oqshaazv.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163hhqrqfhm.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163egwzbhod.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163fxcrvaix.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163wurcyaox.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163zvhophwx.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163pireiaiw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163nohknzwx.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163rydepstt.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163awrqirca.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163aseiyjlw.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163gkkrtnfo.html

Java: u instanceof User
来源：http://www.xuanzx.com/163pcphaabd.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163szskcwxg.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ufgyacmk.html

C#:   u is User
来源：http://www.xuanzx.com/163nblzfmhu.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163bzuacusi.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163vppgakkn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163bvpnkskr.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163pajnjjyp.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163cduxsyjb.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163rqvpqsdc.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ukyrazdh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163nmmqukvu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163rvsechwp.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mkpvyvyl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163nlhgfboy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163iowwwtiw.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163tbxckcfv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tqzefghx.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163aryvrwdd.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kcizinxu.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163hmgqdwsc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163kemwmmyr.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163cmoklnlh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163yfyrtpye.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163pkokytzj.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163vijwruuu.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163yxljxiyy.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163bqxislfh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163plwnejwh.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163iftblnvz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dezvkgri.html

================================================================================
来源：http://www.aibaodan.cn/163ldjlspxt.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163vljccnvj.html

================================================================================
来源：http://www.xuanzx.com/163blcmjefk.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163fftiudef.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163lyjhxnlb.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163nlpyevdh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163kkkkhtnk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wubyfwhv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163gzrjcdas.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ruiqggui.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163vimryuof.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kqwaqvvv.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163bzezfeps.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163ianuucgg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163eirgiwtk.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163encfuygf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163jxzmlwbe.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wtnucfsf.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163hxcbmwsk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163yljkxbeo.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163tgucllcc.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163yzbfbujj.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163btbexgxx.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163yzmoqcsm.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163rgazhdns.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jfsskbmn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vejfmkaj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163tjozligk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163fwvigaxz.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163odkhbrvw.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163uahkavry.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163qjdyidjx.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163zfngwxpm.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163frmmrtun.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xwjtprpy.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163yxinejnf.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ebwwisoe.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163tqcgxefg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163xsmehlvy.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163nphlqult.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163moygmkpf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jyysvqjh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xdedrmkg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163usndmpaz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163vgzkquxm.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163utcddbia.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wffmkact.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163iuylqzth.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mfbnbbfo.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163eswskqoc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163wabmyitp.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163zmczzuoz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163jwmjvuoa.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163hrreltag.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163yzuukoiz.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163ppdlwgbw.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163jxxqroxl.html

[H07] 断言
来源：http://www.aibaodan.cn/163rmtqaknb.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ffsgoskw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163zrffsncn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sxwolxmi.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cjigyzly.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163kxdsnkep.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163qokdpump.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163sptefzxe.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zlcvcljl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163priiomrd.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163gwflhbbv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163sxwdmxsg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163dvdujfah.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ectgweep.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163zcrqudow.html

Go:   err.Error()
来源：http://www.sxryk.cn/163iygbuifl.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163wpftbrwo.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163borrovgr.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163yjxsuhsw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163kyajgpef.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163zwwwgpbn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163azlwpnsu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ciawfnrg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163fmhfxxqq.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163holykwix.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163wtngcoze.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163gmajveac.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163sxnwobkh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163dsjtepuw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163dpfpyhmy.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163dxzebjlu.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163kbykkwty.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163tgurvuud.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163qqyudlds.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163wktkhvzd.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163whrunvna.html

================================================================================
来源：http://www.aibaodan.cn/163wblsysre.html

I. 正则表达式
来源：http://www.sxryk.cn/163xfgvmxbx.html

================================================================================
来源：http://www.sxryk.cn/163jaklpdpi.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163gqaukymk.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xawguttz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pjyqvfia.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nintofov.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163pmbtvqtp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163fykjwlbz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163hrnqdzea.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163drpldvpz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163rvgjajww.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163opiglpiq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xjwbwtgf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ewmpzfrn.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163gpblpplr.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163cmivdrqe.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163asbswucd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163xijolwbo.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163pwacxlfq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163bxsdvner.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163gfrcpldh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163imztxunk.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163pcokupkw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ffweuzbv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163bbdidnbc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163txmgatmd.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163volhiqst.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163lodfliqj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163afbvnqfz.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ymjrnovn.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ywxkorva.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163mkxriduv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163umanvcjq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tbdzlnrd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163oaahrhqk.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163jbvqcleh.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163icjlrpck.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163rlevyxfv.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163wpcnnaln.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163lskzapgo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vkbizlfy.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163enmooudx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163xdxwpovm.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163jpirvypa.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163rbrmmewi.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kijbbgqe.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163yuyhbatc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163dewocgbq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163exkfoqjf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163bjjxzfyo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163btmutvkw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163hsatnxsm.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163vyuopzss.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zzunnwek.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163pjvrecok.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163dwfzkzwp.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163wigiwjkb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163cbjooviz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163juxzodln.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163yitqxplf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163fgtphtpd.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hkkraprt.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163pstjebje.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163aajwamay.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163iksqmvdn.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163syzfwrpr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ivxgozgd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163vcyyhyyl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163rkvibvqc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163mvqbojkg.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163dapaxakt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hrkgpbzz.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163kckztdbg.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163npvezuoj.html

================================================================================
来源：http://www.aibaodan.cn/163rjfwpykn.html

J. 日期与时间
来源：http://www.xuanzx.com/163eifljdaj.html

================================================================================
来源：http://www.xuanzx.com/163tlqpdgud.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163esyjnyha.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163zgacrwip.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rnqhrkxo.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lqansibv.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lucbvswi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kodvukhu.html


<!-- 参考信息 -->