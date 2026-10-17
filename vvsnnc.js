外链999!wailian999！

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hicukuyt.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163bwdggjox.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163dqvjlhjs.html

TS:   interface Shape { area(): number; }
来源：http://www.xuanzx.com/163iryjgfmf.html

Java: interface Shape { double area(); }
来源：http://www.sxryk.cn/163cszqtjvp.html

Go:   type Shape interface { Area() float64 }
来源：http://www.aibaodan.cn/163qfrtwzbl.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163jbdjjggp.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163pgauvirn.html

[G10] 访问控制
来源：http://www.xuanzx.com/163psaplyrf.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163bankujth.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163vawzkpar.html

JS:   #private 字段；其余公开
来源：http://www.aibaodan.cn/163qcscbugo.html

TS:   public / protected / private
来源：http://www.xuanzx.com/163davbvvpx.html

Java: public / protected / private / 默认包级
来源：http://www.xuanzx.com/163iunakyeu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163dcbinlwi.html

Ruby: public / protected / private
来源：http://www.xuanzx.com/163zjqzhjhc.html

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163ogfrzcec.html

[G11] getter / setter
来源：http://www.sxryk.cn/163jhunpulj.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163adulimxv.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163zoztthzc.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163czppknwp.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163qvxdnask.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163cewgtekr.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163mmeadpag.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163pnqvaesh.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163xatwpjuf.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163bfgwmqgd.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mldxvjpn.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163wytonfeo.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163rydxxtxy.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163dobrqhod.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163rqwuiebl.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163ygvmhkup.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163ihghhicx.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163aqvxozmn.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163tgahgvqf.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163bejpadvz.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163qipmhtup.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163wvwnpkse.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163sujiifah.html

Java: u instanceof User
来源：http://www.xuanzx.com/163qgobmqqx.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163kzrnnvuo.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163rmpkjjkc.html

C#:   u is User
来源：http://www.xuanzx.com/163vbfbjxdn.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163chxwkhjn.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163auikdfyn.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163fdxhodog.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163ypajzdbf.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163fphhorup.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163nbygxovo.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163qpycatbh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163rhuydxth.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163sgbxihua.html

[G15] 枚举
来源：http://www.sxryk.cn/163smjsrkcz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163afsojbzy.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163bvomsirt.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163bodpqnrq.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dkugtfjv.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163eaeztpiz.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163fxjggyjt.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163fulokrlh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163vgageimd.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163uhijbkhb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163dwojgfwi.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163lzfxhhbo.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163ofwcdnow.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163hrehgvdg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163drsztwou.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163vcsdzkht.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163hxqstahu.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163oaljxhib.html

================================================================================
来源：http://www.sxryk.cn/163uhetwzuu.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163nfeqtkkb.html

================================================================================
来源：http://www.xuanzx.com/163wrffgfqq.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163eedgherk.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163jyotonyd.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163szvzsvcx.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163rbbthwpq.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163vtjgothd.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163fbvmbmek.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163njqaicoq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163mrpxbtvw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163yeovsdxl.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163femjfovv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163rssjlhyh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ucpsrxea.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163lpluaflf.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ddrqdlnf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163wseiqrah.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163oqzbkxxf.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163gqyclkvt.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163ntfmmgnf.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163placekpe.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163olmyelrr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163cnadggrl.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bkfuebre.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163otssnytj.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163rgoahfmq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163xumaqekl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kqnrsbrr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163lzndikbk.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163hgzbhgev.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163daiubyhg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xhvqghxv.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wdccjogq.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hixzgzxx.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163dogkqdcu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163pyrwwdgy.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163ocwepqnm.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163wutsdhae.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163byxjgjiu.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163niciodcy.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163iaigmtih.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163kryuxqjm.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163isxkptft.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163rtlmihsn.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163grrbifxs.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163orxvhgul.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163trwtygya.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fkbjuxya.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ounsefmv.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163tvmcjuzn.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jwmygfmd.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163iqhxulkf.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rhgdifaa.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163qkjgluqe.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163dhekviur.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163vtozrfic.html

[H07] 断言
来源：http://www.aibaodan.cn/163ehsrlobr.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163igrarcle.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163dnwcgwit.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ghswddoj.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163xrtgboxh.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163rhcdjunw.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mdgglffh.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163kyjdpvtu.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xhyvkfzi.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163sblzhszb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163tdpxihie.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163gqelhfet.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163rbjosbxq.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163sjrjdrao.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163eqkowxaz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163nawyactj.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163rwfuzjdp.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163calrncvh.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163aofedmxd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163fteuneap.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163qjuttjdz.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163pasbrgdg.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163sfrsgazk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163njgpllfe.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163nkohikhm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163penpdeom.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ndduqppz.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163jdshwxgk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ccnsvuoj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163kqyydvvn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xygwhxbp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hkptsxdd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ysctrreb.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163jwnvxmsa.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163glqkkufx.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vlczpnvd.html

================================================================================
来源：http://www.xuanzx.com/163tdgwrdlh.html

I. 正则表达式
来源：http://www.sxryk.cn/163vuuzinmw.html

================================================================================
来源：http://www.aibaodan.cn/163dxoruznx.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163iowfdqjj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163anumwbwf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163gvpvvfve.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163deuaxpeo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163epiwzcfy.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gmjmoske.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163riagwqqh.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163dosdizyl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163kplukemt.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ovhoefet.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163jjejhwth.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163jagcvuvq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xwntpfld.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xbztqyry.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163bvojdepy.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163xnefpnyf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163bjlzhoyu.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hfkmkysy.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163zpvueibm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gfxoznkf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gusqnkko.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163migixdyg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163kghnropl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163gjebinpz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163vqsunmis.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163elwjhewx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163xqtuhbfk.html

[I04] 正则替换
来源：http://www.sxryk.cn/163gmmwygoz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qgjzlfdz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163iwcjglvn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163igydyfen.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yeniaqif.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xeqwhyrp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163fjhkfluc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163nfzgkqcw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163gvcccrdp.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163jrxclsrp.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163npmgnwaq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163tkmnqryh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qoruszug.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163eavqxdwv.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163fkbqixgr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wcaatzih.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jvidkosl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163veeouwss.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163jkpexrhe.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ymjudxsg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163zymexgtr.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163yoelyrig.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163sfavbcrk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163zlezlzli.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163rqlmsuzt.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163dzcmiedm.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ndsvhjww.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163npdihqih.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163mmeodfet.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jhevityu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163eblxwtqb.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163ueqxbols.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163mhkuniry.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163grebbthh.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163pcoduxra.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163cizrjxth.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163qwpnkubu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163umrkdzqu.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163cslybhqh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ogybxzct.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vttrvdsm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163qxogabel.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163tqgknjsc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163rpdfldvn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163xaxwuvna.html

================================================================================
来源：http://www.xuanzx.com/163kypjrhrt.html

J. 日期与时间
来源：http://www.xuanzx.com/163fidriuxz.html

================================================================================
来源：http://www.aibaodan.cn/163qqqoairk.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163gomqnclk.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163kjfdpjtx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163zdrnlasg.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163vsnhuqxr.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nbuauxzm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163tnslvvup.html

Go:   time.Now()
来源：http://www.xuanzx.com/163vcinmidj.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fwshvllk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163klbgveom.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163gtkazlck.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qsordwyg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163pqwrzxum.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163hhofnbdb.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163xdmxmrkf.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163maogkaci.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nptmvlea.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163jhreqghc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163tuvptgqk.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163shjbvlwn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163heuaozxx.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ytyhtzjz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ikwjtphe.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163bfzlezwp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nbpuvrnz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tzdrbzki.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163wvzroqrt.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163tboikxwi.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jvvnlped.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fscfducq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163ierjmqod.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163swffpeag.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163vcdxkufd.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163vbqtyhlu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163aikzekwh.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163vlyqxkkf.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163sbqxumwf.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163zxcrgwha.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163iponntbw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163alysempu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eprdnjrr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163exgdnmfb.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163kbahmyus.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163gxqlqqxm.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163nwktxlry.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163xdvcgrkn.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163jnsynfec.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163zgyzbcal.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163yrtsdpnr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163ucexjxdb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kqxxpefv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163zliuothd.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163ocfllhwq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163oxywbovy.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163qlqwtxpx.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163crudzxsk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tgtzowkq.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163rwgfhlbj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163zoojasug.html


<!-- 参考信息 -->