外链999!wailian999！

JS:   super.greet();
来源：http://www.sxryk.cn/163fikcvbfp.html

TS:   super.greet();
来源：http://www.xuanzx.com/163kvkigzrz.html

Java: super.greet();
来源：http://www.sxryk.cn/163duqosdly.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.sxryk.cn/163tjntyywv.html

Ruby: super
来源：http://www.xuanzx.com/163yajctuan.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163zfsioppg.html

[G08] 静态方法与属性
来源：http://www.sxryk.cn/163negcjrlf.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163bdlmpreh.html

PHP:  public static function f() {}
来源：http://www.sxryk.cn/163pvajjcrp.html

JS:   static f() {}
来源：http://www.xuanzx.com/163kivtalxv.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163espfkqwq.html

Java: static void f() {}
来源：http://www.xuanzx.com/163xqeosipx.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163yqtiqbqy.html

Ruby: def self.f; end
来源：http://www.aibaodan.cn/163fpoqdlqu.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163gvapsawt.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ckjhgjkm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163wxspoppf.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163zaxzwgog.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163tmbjycjv.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163jimjqyof.html

Java: interface Shape { double area(); }
来源：http://www.xuanzx.com/163sbqapihd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163echxfrvu.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163onqphaqw.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163jwykzavi.html

[G10] 访问控制
来源：http://www.sxryk.cn/163elfiowxi.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163yswsdfbm.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163mcqpnkwk.html

JS:   #private 字段；其余公开
来源：http://www.sxryk.cn/163tbkxakgr.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163pfsunlbr.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163kjgxgsmh.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163kkfspvsk.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163zuqheowb.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163cuffwkcg.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ssmfvecu.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163joiebghn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163rrzjwlco.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163xglztvgo.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hfiqlndf.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ppjsejvd.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163xeipfzuv.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163nvqyfxtr.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163gizjhriz.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163dgzfhfap.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163hztibtyz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163dzocxscq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163jtjsuafj.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163temnxoxi.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163ntvqnlgh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163nngnaiqg.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ljcinzae.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163vjiuoasu.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163vuqxpqqo.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163yquigckd.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163cfimgozd.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163zpgoyjfr.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163imwjpsen.html

Java: u instanceof User
来源：http://www.sxryk.cn/163uxdolgvl.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163jeegejnt.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163hbptrirr.html

C#:   u is User
来源：http://www.aibaodan.cn/163bfqmgyzs.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163ztujisci.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163mqgojcmb.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163yjofyawt.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163ovfumwus.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163ostyjezz.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163skcqqtiu.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163zcyjitgj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163tawpgbgr.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163eolimlem.html

[G15] 枚举
来源：http://www.aibaodan.cn/163pfszrvll.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163kskdixmq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163acnymcwx.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163baxhfsjr.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bglswhkf.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163sdzgatvr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163wrmfajzu.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163piibbgsc.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163gzacuxqu.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163lgikfctv.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163qetezjda.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163ttefayed.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163pvkgcbvj.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163odhyyuzs.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163imoynnmi.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ctbvafyc.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163uilzibnl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163rbxiptod.html

================================================================================
来源：http://www.aibaodan.cn/163tnrhuooq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163axfnypxe.html

================================================================================
来源：http://www.aibaodan.cn/163anvpxfbc.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dpodtfsi.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163qcncmazi.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163yhqaifff.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163bsvvdvfr.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163gkpyuzpq.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163vhppwugk.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163rpkjlzle.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163gcxldohe.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wmysmyud.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zxbluahw.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163nithhglj.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mzslhnii.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tuvmnihr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ewjicyyb.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163epdlockd.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163rkryhfse.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163bndajgys.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163dfinsgel.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163gxfivrrm.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163rqhmzjmk.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163niqznuvx.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163wsvkruqc.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ercakukw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163lneigipn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ecysaqeh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163zrrtqeri.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163iwvoddup.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163tbmpvjpd.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163tlshnbxb.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163nwbvnmtz.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163mljxqbag.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163znthmctr.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mafqezdk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163uapdhksk.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ffcvpgos.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ahcdayew.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rdsvylbg.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163jxivpbbc.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163uapsfrqi.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163qwfnahnt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163tzivckeg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ctfofbos.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pbxfjitv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ebhlwlue.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xnwmrchv.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163cebxkzha.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163vfsfdjdv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163hfdyjuho.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ylktmeln.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163ktyfsvmx.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163kzpihqij.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163gfdackeu.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163nlirzqiz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163aixlczup.html

[H07] 断言
来源：http://www.xuanzx.com/163lpowrojn.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163gonfcrjm.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163kunnncch.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xcunnimr.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qtfdbvzb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163cckcnscq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163yivjidsi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163etkmbgze.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163asebalsh.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163olavgdqx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163regqkwar.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163xwmtzipa.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163zzapnhec.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163zshupoul.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163iamfqckp.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163kwzbfnjs.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163xbblvwow.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163tzlxnely.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163hswdowmz.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163sbgfdkdo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163lskvmtbo.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163okionhsy.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163njfojbum.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163squsqyxt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163pepqlrpb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163kjfzaatp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163efnsauet.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163ohygdekn.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ksgukpco.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163dmiwvnas.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163vbyvlztr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163vmhigvak.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xghsllkw.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163jeoqwqio.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163lahhktlb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163ifsffgfk.html

================================================================================
来源：http://www.sxryk.cn/163umnhgggv.html

I. 正则表达式
来源：http://www.aibaodan.cn/163mrhwoavy.html

================================================================================
来源：http://www.aibaodan.cn/163isoyugid.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163asrogpdb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163xsboosgk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163qhhpczkl.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163wsfhdeyu.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163eyibhcms.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163oaexwehj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163skuxyjhb.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163qecismdd.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163mzycpzmc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163lxjnzehs.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163bbdkgpaf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163kqjzjbro.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163lencqedp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163hawytzgp.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163dqipfniu.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163yokopocz.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163axunifkt.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163bjvwijyy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163lfpqyxwt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163eybwwice.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163eiwlasmq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ltpzfuzo.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163qultsivb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163lwfvlhua.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163uurijwbv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163pbcclxzd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163munrgwxe.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163bjxgazed.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mktnmrfa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uxgdvybs.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163pxupprcl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tgbgnrgu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163kuhtmezx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163vvnomlhu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163trukravp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lpvadfeo.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163lrgxygfo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163edmiowfa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163mgcaljjk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ienyqgpw.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nwmgnejd.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163tbdsecbd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163ruwivlih.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ptdleeke.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163kfqazskd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163mpuxmjvf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163bknrdgka.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163bsldhrpb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163haakrsdz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163suwmhmis.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jizmyvuy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163ymtvxbjx.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163falijumu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ztufeafb.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163fdavokpd.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163kuhqbxss.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163wvbchlqt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163keynnxyf.html

TS:   /error/gim
来源：http://www.sxryk.cn/163pfrizfue.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163mabsqbat.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163lzaarcmv.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163nvooiglp.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yivjxvna.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yqcjjjuj.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163uasqtvfz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163yimlfsdr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163srpmnovr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163indtmffa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163szwlljrd.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wwhximof.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jwrwknwh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zrfbksgo.html

================================================================================
来源：http://www.aibaodan.cn/163peqslepp.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ibkbyqmr.html

================================================================================
来源：http://www.sxryk.cn/163zbcaddao.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kjyxzdfh.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163htvgoykf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163ejeutbck.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ejkramex.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163tpfiwssu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163hbqgphfm.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163uisxbjqr.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zjnefmpw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163jtmzukzc.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163tllrtqgg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163eqpmoqbk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163rzzxddmt.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ludddpxd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163smlnikqy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163uypngoca.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163wjdmqkwh.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zwpbvkdx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163vwwbhjxg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jjuirzqt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163bvytruvs.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qihhetyf.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163afpscnvc.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ttawgdwo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163nublguht.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163kcgkcsiw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yowtmhsj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163wlhbonqf.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163dhjvwwiu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163evdhqsbe.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163dhmqseij.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163uvktntae.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vumajhje.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163nktydmqy.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163njsiejch.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163mbaoyzlu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163yrphnxnf.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163webfebsh.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wokbdjts.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dcicuzqu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jfaobrws.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tmkcokgl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163jwtvjbym.html


<!-- 参考信息 -->