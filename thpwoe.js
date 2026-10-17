外链999!wailian999！

Ruby: super
来源：http://www.sxryk.cn/163iuyitjaf.html

C#:   base.Greet();
来源：http://www.aibaodan.cn/163nvvrcgvj.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163xrffrqqy.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163gxshivky.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163vdrlfwub.html

JS:   static f() {}
来源：http://www.sxryk.cn/163dzqljhfu.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163owvqcjus.html

Java: static void f() {}
来源：http://www.sxryk.cn/163tveddjjm.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.xuanzx.com/163slnvbemw.html

Ruby: def self.f; end
来源：http://www.sxryk.cn/163rbdqnsre.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163lntmsogl.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163ppfuhqmm.html

Py:   from abc import ABC, abstractmethod
来源：http://www.sxryk.cn/163obbsktgb.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.xuanzx.com/163yqolsqxa.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163ymdvrmlc.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163umakoals.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163qyeaqkpz.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163jlqtmzmx.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163ifqrawpc.html

C#:   interface IShape { double Area(); }
来源：http://www.aibaodan.cn/163cpivoswc.html

[G10] 访问控制
来源：http://www.sxryk.cn/163bazoayni.html

Py:   约定 _protected / __private（不强制）
来源：http://www.aibaodan.cn/163hvoobuiv.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163lonbfjrd.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163bmdftroa.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163wdqbjghz.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163aznnwkbt.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.sxryk.cn/163nypuwrnp.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163nrlulnms.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163tfaiaunz.html

[G11] getter / setter
来源：http://www.xuanzx.com/163ypsjrfhz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163vydysqlr.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ymlwpthq.html

JS:   get name() { return this._name; }
来源：http://www.sxryk.cn/163unaojdpd.html

TS:   get name(): string { return this._name; }
来源：http://www.sxryk.cn/163dpispdqw.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163upomrvoq.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163suzkftrv.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163mfiveeub.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163wmgzumsm.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163mvnaiyzo.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163wslukgos.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xuvjqodu.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163ipesmakn.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163tdtzmfjx.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163siapyeuh.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163emvxglju.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163avjkrucc.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pkdyeenb.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163lexqtzss.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163qwyvbwjv.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163txnzennw.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163uimoskpt.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163aqfsdwrw.html

Java: u instanceof User
来源：http://www.xuanzx.com/163qynvtzjv.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ctchnzcl.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163vmdtasih.html

C#:   u is User
来源：http://www.aibaodan.cn/163yvunjlfb.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163nmozomhd.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163guiqfahr.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163muqwmxul.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.aibaodan.cn/163nxgbjvqp.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163cwktjuzx.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163velxxalm.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163wwpxkofe.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163pyhbwcfy.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ejyyjetj.html

[G15] 枚举
来源：http://www.sxryk.cn/163cmcxvjcf.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163rqtwazyp.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163xxumsbpt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163jsvmzoxg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qntvtnod.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163piyfabua.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163enrzaryv.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163jgafmdzp.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163mrnwzaja.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163nfepfyso.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163rmupffoq.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163xzdbcyzu.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163crplqznu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ogpxkxpq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163ooxrtyfh.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163qnenzrno.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163lzxjsgnf.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163mtdyjbtl.html

================================================================================
来源：http://www.aibaodan.cn/163filbslwl.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163vhnfdtdc.html

================================================================================
来源：http://www.xuanzx.com/163aoezisnw.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163erokkerv.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163xrtdacsd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163cresbajv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163vurrlojn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ychceeud.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163wgkbsurq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163fjcuxrqu.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163tavkrsry.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dpkslacj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gihmrzvn.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163gcrpdctg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163laneoyfp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163plaqyzzr.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163llsexiyl.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163romxxsvy.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163lsfobklo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cixaoofv.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163brrcyxjd.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wwhcmfmg.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163kvauatrz.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163gyquavsm.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kqynaakr.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rnxcxjrg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163nbakzncc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163hhonzhql.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163tkdqfmeg.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163elsvhyeo.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163gzphcfdu.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163nctxqtwa.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163jcknitzy.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163optglhor.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163uwqjnibr.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163gulxmkyz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163hjbsnkxl.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163byrqhggd.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163ntrljyhi.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163qavxxsjx.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qivegtkk.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163aspqjlmo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163mocrempp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yawspoin.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163txgnzmpj.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jqfpukjs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ljbbihjv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163ggvxnhbp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163atohwluk.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163tuhlwoik.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163gdijxkus.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lidkhdqt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ezzbgnbv.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163mybbvqhs.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163mibunjhq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163zyjyborh.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163mhrxlmvi.html

[H07] 断言
来源：http://www.xuanzx.com/163dfdmtqmy.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163ghidkzpi.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163sapnbsdy.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kaylkmuv.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wfspbvph.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163cwxotpus.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163qjcuvyxi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163kuqrqulc.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cfiqxryf.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163nmrmurzz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vlvldvdg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zqlnrkuz.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163nrrghwht.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dyoenxjk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163gcxodytq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163vhmpvlmd.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163akwnqezx.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163wkknjcfx.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kvsxxtos.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163zpmdkwtr.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163qwdhsyfg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kkukplgw.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163xnqngvvr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163kirnmmzu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xbkrgvkl.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163kgeuhuax.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163thmhygfw.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163vpldejcd.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dvhksshv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163zobewgfj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163znnrsjht.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163ihwrxkpm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163qwvvndfb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163icjlfoht.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ydkvanyy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163ootbljsx.html

================================================================================
来源：http://www.aibaodan.cn/163lbrrcfwq.html

I. 正则表达式
来源：http://www.aibaodan.cn/163epnfaybg.html

================================================================================
来源：http://www.xuanzx.com/163fvskvzpi.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163eoswrnpz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163lkylcgos.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163foswtlif.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163oryqowsx.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163bvhaxzmz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163yvzqqudy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163tjjjixqc.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jzqvanay.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163vcawajem.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163luwhmnds.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163whzpuyrz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163jonblrrv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kcaxfpiu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163xvauuzmd.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ixilybzl.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163axommicx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163voxfrtmb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163fnnxwlvb.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163mlhyvrqq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163hlpaimpt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163yiwddjmf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163oxyvehhu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163epmqzdme.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163mdedbdve.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163defvyjys.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163pczhnjtw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163euxazgjf.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rkpricun.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ivywoulg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163urosgcou.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163rjnngjjc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163fonewsrm.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wxfwslxg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ajjiivhp.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ruiyqytm.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fuyywqmu.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jcvfqvoo.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163zjaybesa.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163cclelbtm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163srbysuer.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qckcjmds.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163asznigeu.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163fcuqakxc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zmsqfxkl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163bdglnhck.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163dkyiqeqh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163beuzircr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163bdszulvn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163raaztcrh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163hqeptgwg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ispbezdu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163slnaddfz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163tchgxaoc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ishkggjh.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qkdtmdrf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ajoiwqew.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163oowkhcvp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163soqkgtih.html

TS:   /error/gim
来源：http://www.sxryk.cn/163llxihaqc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163magbagzz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163srhgyzul.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163pugrnhng.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163mkqvhgai.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qdskimpi.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163gomerrer.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ftpmqabw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wszovrdf.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ltxyxntf.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163nmvefwlo.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163stgepafx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163abdzjdpt.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163puznmtmc.html

================================================================================
来源：http://www.xuanzx.com/163tiycquea.html

J. 日期与时间
来源：http://www.aibaodan.cn/163vuuqzklv.html

================================================================================
来源：http://www.sxryk.cn/163ovjymmrd.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163rwxdhaah.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ojjvytsp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163limqenhs.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163nnmpwome.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163opcsmwgi.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163prfqblrp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163uwgxcdgg.html

Ruby: Time.now
来源：http://www.sxryk.cn/163ibfiwyfi.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163jphvjgao.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163vodvlpup.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fpkfuqod.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163trwvwpbc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163umcjxegd.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pyrrdgkj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163oxbnprsv.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dmbbhqgz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163ideraskp.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mbiotlay.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163huzrvkef.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fxkdmhqo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qzravedk.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mwphefkm.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163knxzertx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163onttkqpg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163aythfmel.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wxqwvyge.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163lpbkqzfv.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163obwmycia.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163vqalwtti.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163kbfmtagj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163cyenmkck.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163hnbnakyw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163rrvntxbt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nwlvyqvi.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163gqwlqhvi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163ywdmxlqs.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163pvfdjdai.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163bydqacza.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hiaoaokj.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xjwdfxcl.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kduqfiid.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mlygsboy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163zojpskal.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163mtjnzytp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163ucehtzth.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ajogcbfj.html


<!-- 参考信息 -->