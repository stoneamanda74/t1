外链999!wailian999！

JS:   super.greet();
来源：http://www.sxryk.cn/163tyrerlkl.html

TS:   super.greet();
来源：http://www.xuanzx.com/163aitkbnaa.html

Java: super.greet();
来源：http://www.aibaodan.cn/163nqoevxjn.html

Go:   u.User.Greet()               // 显式调用嵌入字段的方法
来源：http://www.aibaodan.cn/163rqyvndbw.html

Ruby: super
来源：http://www.aibaodan.cn/163qnfgttef.html

C#:   base.Greet();
来源：http://www.sxryk.cn/163ymdgdwgz.html

[G08] 静态方法与属性
来源：http://www.xuanzx.com/163aitfpbxt.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.xuanzx.com/163cpyoojdr.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163remuowlq.html

JS:   static f() {}
来源：http://www.sxryk.cn/163lhlvbjsk.html

TS:   static f(): void {}
来源：http://www.sxryk.cn/163rkvjzccs.html

Java: static void f() {}
来源：http://www.xuanzx.com/163kfkotfsg.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.aibaodan.cn/163ovdwjthx.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163yobrykcz.html

C#:   public static void F() {}
来源：http://www.sxryk.cn/163yjoviljd.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163spotzudw.html

Py:   from abc import ABC, abstractmethod
来源：http://www.aibaodan.cn/163rhdtktpa.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163polbvqyd.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163gtbcmpem.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163aifcyxtl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163vphzjhqb.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163jojxqiki.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163feblmmnl.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163brlafvoj.html

[G10] 访问控制
来源：http://www.sxryk.cn/163theazorm.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hgqfrqxo.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163jrcgutcm.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163mxezmtll.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163vbhkhwmk.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163fintiilq.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163ehvxtmzf.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163folqqywf.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ktpeftes.html

[G11] getter / setter
来源：http://www.xuanzx.com/163fzdiayiz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163xdqvtige.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163cbcmhsue.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163dbjfaada.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163fyyhdwxc.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163fabpbcjm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163tmbaqifc.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ufwdmqpm.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fpmlrydf.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163qbsazgnt.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163lytuoigo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163jqropfew.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163goyolrzi.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163gkmcfrqb.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xkarvpui.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163ydxjxxki.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163biokbrqt.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163ygqkskav.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163jcnrulbk.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163anxeqtcn.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163chtiiggk.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163czxqxwoc.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163qjbdmzle.html

Java: u instanceof User
来源：http://www.sxryk.cn/163qmkimlzq.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163zrpiwlpo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163taxfyerk.html

C#:   u is User
来源：http://www.aibaodan.cn/163wckrpluw.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163hkaeduap.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163embbrwbx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163kiqvzzzv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163tuuwuukf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163atbxcejy.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163sjordpna.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163abilmebr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163wpfjofpo.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163ttbgrosd.html

[G15] 枚举
来源：http://www.sxryk.cn/163kdjmbqws.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163vpomjoxs.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163hxqqvqwq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163dsyejckw.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163hjewfckr.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163txfxzysy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163igaqqvsh.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163fupaowtk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163nutcejfm.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163rmcwwoxh.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163zvwhudpb.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163ssowpftv.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163bsdulktl.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163pbyskpcb.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163zekhroiz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163wbarrcfa.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163mvkadwzz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163upalqpyl.html

================================================================================
来源：http://www.sxryk.cn/163shztshta.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163yeulumaj.html

================================================================================
来源：http://www.xuanzx.com/163dacjvobz.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163atovvvyn.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163jfdtxutd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163avuypowp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163syqfxgce.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163ndlircuv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ickmdvhw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163lfmwqqaz.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163lnnuiqqg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163vxtrfjdm.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163djwhsrdj.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ecbiohsl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dgvqjzjr.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wewmayhp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163fvwxitve.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163vpmjjzsz.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163vpghpxmp.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163ruemkcuk.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163zmwrvjne.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163hgcjiwuh.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ehswvrdh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163obbstigy.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163zdfdaxvw.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uwsnifyu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163kzcmmfmp.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163mzqleomr.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163jjgskjcy.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163eldmhoxn.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163pyggrkda.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163tdjenctu.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163kokbgunk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163qvxuxdvg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lqefhlng.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163mhayhmlr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163uoralzba.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163okjalltc.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163jthpccjj.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163mmuiyuqi.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163pvhjbsjy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163snmxzxep.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163qgnceebt.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163mjdyiecu.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163bughuojv.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163yilsvprs.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ukapbgml.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163pzfqciyj.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163ujlkuykj.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dbzvawyo.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163fxwharfw.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vkdzipje.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163inxtwzkh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163jxdyfgpo.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163iacxgecf.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163uylangws.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163aemxqziy.html

[H07] 断言
来源：http://www.xuanzx.com/163srbekenm.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163yvcbsocb.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163vbfjhrdh.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ioqcojyd.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163znestevq.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163vmkpuljh.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163cfzufapm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ppmiifvo.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163sndkrlrq.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163vcwpjojy.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163uoblgftj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163srneolcv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163rpdhquef.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ykmavxho.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163bcoqhtjh.html

Go:   err.Error()
来源：http://www.sxryk.cn/163yexdhvpy.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163faikzwgd.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163mvfnxeih.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vfbqoxwx.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163pqixuify.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bkogpmgz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163tkpmkqqm.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163bvaxoxet.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163etjfitey.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163zlyhokyx.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mqwybzdc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ydgwjoqx.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163sapgrjgh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163dpyywjgk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163efsuboqd.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xqsuzeir.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163pwlpuywt.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vvmroqom.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163bhohwlqh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163csnvuzrv.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ukejdcuh.html

================================================================================
来源：http://www.aibaodan.cn/163opwttyee.html

I. 正则表达式
来源：http://www.sxryk.cn/163fieecyrt.html

================================================================================
来源：http://www.aibaodan.cn/163ynwymzby.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163igdhwksj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163aarfguzx.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xcthmysu.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163hnekvhua.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bzkcxduc.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163runnmgco.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163prptpwme.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163eisvbxzr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163jpttpret.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ukccrbhz.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qgxjbows.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ojcwffpa.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163hquxkczy.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163huiyquft.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163llssdzli.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163wneaoeiu.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163tzaamlea.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hljllvih.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163nzgmfarx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163xnnicyik.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163rqwuyvru.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163frayetrl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mcdattqo.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163oqzfkkxe.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jmrlsokg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163myarfklb.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163jbsqfxzx.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ytuvcvkw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163njgrwmse.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163atjowqxi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ichhtprs.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163tbwazblh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163qvwqmamd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163rdnmqwat.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163gbzpkqdh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163xyizylsn.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163qdmmbhlb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163angtdmbb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163bdgpxvsk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rnsrgobf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163iyexjqtq.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163pqshwvlr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163yljuievy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163cvpmeyse.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qqjzyytn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wrancjwk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lxepgwpl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163ndghsgiy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ibfnblgd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ggvgjmap.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163feqowbgz.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163scmhhlky.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163zapwhxob.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163oioszmyb.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163wdcujzfk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163fbommnnr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ueleszrp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163tggmrdzq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163vkjirfdb.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qkxqzklp.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163shmrhlhb.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163nqudbclt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163inzpffqd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qfjbvyju.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163hzalwqcw.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163njszffuu.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163laiqeugm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tnzbepol.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163iyvwvxnt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163eahfjzct.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163kvsrgebp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163lzohdmer.html

================================================================================
来源：http://www.xuanzx.com/163vjjzrmqr.html

J. 日期与时间
来源：http://www.sxryk.cn/163mwseoqyy.html

================================================================================
来源：http://www.aibaodan.cn/163rueptrcz.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163mamjiymx.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163todlviod.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mljatndh.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rxiczjbs.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rzvfznmj.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163qggyipcg.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163prmnyrzh.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rdjzohub.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163beyjfqfb.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163lrwljwlr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163abtjqyqt.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163qxjjkddg.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ftmprair.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163xujlcevf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163uwjpkvyg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ljeesdoy.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163vnwoigpx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163xcpciyhn.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vtzzfgvb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ybcbqtxk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163jasgopow.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163iowsnrcn.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163evpymzeh.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163lrqsfxzj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163oimccrqu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rtlzdwbr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163pknglykc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ugvwszcn.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hnetulcs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163asbejxsc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ehcztdml.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163kaubgaxk.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163xcpzbgdm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163comvzzvz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163vftiiolf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163pmazpwcw.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163knudrhhp.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vlrjyqoj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163kayibmuu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rysemulr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rmyluxho.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gwjlfmkx.html


<!-- 参考信息 -->