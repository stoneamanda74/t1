外链999!wailian999！

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163jzhezuib.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.aibaodan.cn/163ioiakkbz.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.sxryk.cn/163mlgdabdu.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163mboujgnv.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163joimkzsd.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163qwhrhyre.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.aibaodan.cn/163vznwsdle.html

C#:   interface IShape { double Area(); }
来源：http://www.sxryk.cn/163xgdtkhtk.html

[G10] 访问控制
来源：http://www.xuanzx.com/163ioehgxft.html

Py:   约定 _protected / __private（不强制）
来源：http://www.xuanzx.com/163whcbygwc.html

PHP:  public / protected / private
来源：http://www.aibaodan.cn/163ebspdndl.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163iqvbfodq.html

TS:   public / protected / private
来源：http://www.sxryk.cn/163lqqfmzqk.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163dtusecov.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163sowkqegy.html

Ruby: public / protected / private
来源：http://www.aibaodan.cn/163gkijyzjp.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163ystnspwk.html

[G11] getter / setter
来源：http://www.sxryk.cn/163hakzpqgs.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163ezvpzisu.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163thxaqkde.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163jjryaijh.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163cangstlr.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163txgpnawm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163pjkkhjzk.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163scalgmmi.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163yacsjhbf.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163pbfeekix.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163xwbcesnz.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ltrtnmox.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163dwamlndf.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163jocuzrfk.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163tunxmqck.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163adwtjqrw.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163iqnzrvfn.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163pablqzve.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163iqbtmhyb.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163ezasvxhx.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163ypbkincl.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163cilzvevb.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163znvviklt.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lzmuzbau.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fxdumpcf.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163eaegxbuo.html

C#:   u is User
来源：http://www.sxryk.cn/163bpgblwla.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163wcugvysr.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163qbrnropo.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163xkbeutey.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163wasiaidh.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163bhdctmlw.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163lrxrtgmx.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163ktpwrsxj.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163jpqlmhuh.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163yfxcancn.html

[G15] 枚举
来源：http://www.aibaodan.cn/163vmxmlgcp.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163dgaffqaf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163hasrqtza.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163jwmiuzxn.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163evxlpost.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163alafyjck.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163jigfdxwp.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163sjzuazpa.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163twpumhmm.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163badmrvpg.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163rcvsndwp.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163ygpwfeho.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163pzthnfvq.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163wawmcmjg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vlqudrmt.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163xwvknoyc.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163dubatavc.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163sxyrhhpb.html

================================================================================
来源：http://www.xuanzx.com/163qqlzifta.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163tjschkmm.html

================================================================================
来源：http://www.sxryk.cn/163sjbrjwqn.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163riejkjxk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163tzsnaiua.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163vsnmpbfu.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163zxvccnrp.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163mmernlpd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163ogxeanlg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163vexswgsp.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vsyrqiua.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163eloxjsbx.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163mupdtphv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163dhrnizpi.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163tygltkfc.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163uqmlrrzp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163otdsobse.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163cegqyhfk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163oesahgtc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163joevoklu.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163kpaluayy.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163wrjtdjgc.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ufduyiof.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163nzqklbfw.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kjjyiumc.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163klgwkghr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163bixjwtcj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163nymqptbw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163qwbzzevs.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ejcfmcdm.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mrvejwwj.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163gdhwznki.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163jznifgiq.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163gsnatlzv.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163pjlzafyh.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163vjysvgxi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ictfccvq.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163hxmgiuaa.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163eddyfpoy.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163ymohkybu.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xnavtwcq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hoysnajj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xshabrrm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163znrkzezx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163gerudbsn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163ipncbkdy.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163laxdbckt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hkqqfeqe.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163leikxccp.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163drzidgcj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163potmxgdt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163yqapzsgp.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tuoqqbbw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163khphcnkt.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163sygixocq.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163abthxpdt.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163usrufkdy.html

[H07] 断言
来源：http://www.xuanzx.com/163avnarkyy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163umarixqj.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163fdpwnfwu.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mgnaosso.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163hrnyctmp.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163wrumbrpb.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163cslmexlt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163bptwiuoa.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163huetucng.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163sqtlrryg.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ticpogfn.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163kanhknxl.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163djbernea.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163buxtzuzs.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xjwopbpa.html

Go:   err.Error()
来源：http://www.xuanzx.com/163xigizqco.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fqelsnjw.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163ordbmknl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163utnoufbd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163keraxquk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163uqrifgiq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163wpopcfio.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163accvjufd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163bxhwrqqn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163dlxswdyd.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163yxaulfqw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163xrfmtwyh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163bgbbdmlx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163gazqvqkf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163nhrpzjqn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rcnqpifb.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lroudiiw.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163ucuillus.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163gvxuwvmt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163niigyluk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fmciglth.html

================================================================================
来源：http://www.aibaodan.cn/163wamxlsje.html

I. 正则表达式
来源：http://www.aibaodan.cn/163edkyzeqt.html

================================================================================
来源：http://www.xuanzx.com/163cikanygz.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qvkptwln.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163volfyssr.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163bczisxrh.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163dhwiadcq.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163wctvyhwf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163horlfqli.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163hsgxespo.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163yorughar.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163giiqawkc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163sqzaamjm.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163zstlbqdp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163pamzjynu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163obeestmt.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163eoffgsog.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163avguvauc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163dotwlcgf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xfufnujh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kkxnttwj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163srqboxel.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163oabzuiwj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163jhalzmep.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kiwtevip.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163exevmrhd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163slzbjkjc.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ssukxquk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rgvzcity.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dfcwjnvs.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163pvznawqu.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ksrgyczz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wiqlsukk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163pvabphvb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wuztrjme.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163whlclcno.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163udfpddss.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163hhcprnrd.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163bdjhphqr.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ucrnyfdz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163urhpmgdr.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163pildujhu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163sveqqpbg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qllqquxn.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163gxjbyuzb.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163uqzfuiex.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xnepwnuj.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163kfuzlknn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163weewcikr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163plkfqrrz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163nndkuysd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163txzjsemd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163skrlwoca.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163lhgalenm.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163repbrnxz.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163kempzyeq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zcaqycnj.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163cfwwmlnj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jxzrsjiq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163hbonnsnd.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163sljstvek.html

TS:   /error/gim
来源：http://www.xuanzx.com/163ufytjmef.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163qrbeookq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163umugvosw.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163uazopjtt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163kgspqoep.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ozyjntgh.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163nwthfrwj.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163dkmsypmz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ewgedmlh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163skesqkyl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uaihfmpp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163imncuqlf.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163aqikyyjy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163edsturmc.html

================================================================================
来源：http://www.aibaodan.cn/163feqrrung.html

J. 日期与时间
来源：http://www.xuanzx.com/163ckjxyhrg.html

================================================================================
来源：http://www.sxryk.cn/163agnuaixr.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163rymrxqyt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163zqasclyz.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xkwuxbqo.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kiastcsh.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ceoocyfu.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ickzrdkv.html

Go:   time.Now()
来源：http://www.sxryk.cn/163elogoeah.html

Ruby: Time.now
来源：http://www.xuanzx.com/163xzhlhazy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163rcmjcreg.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163qhzxtkkk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sypbqysd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163qvqivqoo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163prlnbwrx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vrvcbwoa.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163vhyrqqku.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163aqcoefjd.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163vjcnieub.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163wzpzvsth.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163mwgglpnu.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163gyvdxcim.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163kpbspvcv.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pinqiumb.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163slczyxsl.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jnggchfk.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163xyjxieqa.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163svbbxtwk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163wbuwyosi.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163oocvaeob.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163jixazdix.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163slgegjvn.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vrsbcmfr.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163wwefirum.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163taicjpzm.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163mvwmhkhm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ptdsesws.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163qgxniwpm.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163zthcmttq.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163wbxqetxl.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163dmwmrmrg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ioneayyh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zzpibdot.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gzzxkwwl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qgzuseqt.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163qrwrodwv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163rujwtnzr.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163rahawtuu.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163yfvhueau.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163odmgnxzt.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163gtfsfwyr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163wwdgyzee.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163yxzpipmc.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163aomfdyfq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163szbmrayt.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163ixgpzgnv.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163zcgblqau.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eevuuviu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163wzcawkaq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qknpijrf.html


<!-- 参考信息 -->