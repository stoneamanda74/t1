外链999!wailian999！

TS:   public / protected / private
来源：http://www.aibaodan.cn/163pjgualkb.html

Java: public / protected / private / 默认包级
来源：http://www.aibaodan.cn/163zyqvpdjz.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.xuanzx.com/163fuonblte.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163sbhibuoc.html

C#:   public / protected / private / internal
来源：http://www.sxryk.cn/163zqkbhzyi.html

[G11] getter / setter
来源：http://www.xuanzx.com/163thlqzsii.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163jtmaqfqh.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163urnrafgo.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163uzlhqzlu.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163kkpchplt.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163wdjwfrfm.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163rfdnxcxl.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163swplhmlu.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163jrjugfco.html

[G12] 对象转字符串
来源：http://www.sxryk.cn/163brpwrseg.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163fzpwibjw.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163ddkahejq.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163udqinjws.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163yjiijrbr.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163nbybqfzq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163owqzwuoi.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163ueywrxvv.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163tpbfqvsl.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163zqfxzmct.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163jetjzsod.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163qksqgbld.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163ehoiabdd.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163uqowlrkx.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163fbuoobdr.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163vqohmpso.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163odlqawat.html

C#:   u is User
来源：http://www.sxryk.cn/163zgvkuojz.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163nqxeqoku.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163fylweudx.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163zvckylkq.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163phsoaysg.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163oowzrkwb.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163jxcolztr.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163wjnkvekz.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163cfehgbaa.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163vpggwfrq.html

[G15] 枚举
来源：http://www.sxryk.cn/163fxapisre.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163zpsvdxzq.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163ipidophq.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163kakajqfe.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163dxwnksok.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163irilpmth.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163iryohxhl.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163yifathkx.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zxwjvuph.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163iatsddox.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163jotqmsmt.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163qaslnqvh.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163eaozxoil.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dqrlizae.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ktucssjy.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163jckbesvi.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163wprypejj.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163dhcednqz.html

================================================================================
来源：http://www.aibaodan.cn/163bprlkrxq.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163twggzdcy.html

================================================================================
来源：http://www.xuanzx.com/163kxnzmwvr.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163hhwkrjdh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163oujseofe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163caquumxm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163mnjnfmxb.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163uldiexbv.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163lyrddchl.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ugbwzffg.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163tyglazql.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163iwvxvtxr.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163eydejpdi.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163wpqgiwpe.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163somvosdb.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jnskyxif.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mgopsmqw.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163rfylxlkw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163bhbicosj.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163yozubcmh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163suuurmbw.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163sajoifjc.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163dwzvoidn.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cfgxfktf.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163quvxuzos.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163loeosvsn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163gboldbgq.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163bznfjjry.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ahkyonwi.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163mhhvkrba.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163otwxoygy.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ezpdxidq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163xvlcvdje.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163dqccuqil.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163sdzlrmrx.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163hfatfnbs.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vahxmpbj.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163ldpgbymd.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ehyjkdqd.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163fqpfkbjo.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qhxrkbnf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163peuefaev.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163peqtlvsz.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163kmutipcd.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163xxflubtu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dfwozyzw.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163opbayehc.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163qkjhuldc.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163rlbubgss.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163ecnmmgzj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zahnrnnf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nsszlfzv.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rzluaucm.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163iuzlinnf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163zzvbdfxc.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163ukvdybgj.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163iwpolwzs.html

[H07] 断言
来源：http://www.aibaodan.cn/163kwjlxynp.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163gohmsvkw.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163urhsfmww.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kskyjmge.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163olstrymg.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wstjyfta.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163axhcatfr.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ylzoxtsm.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163mapjutze.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163pubouhxr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163uegaapie.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163wostdrhl.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163woqszsyr.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163poewghlk.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163slgwwffi.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wnrldvjv.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qikmqmjm.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163idzgtfpk.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ixpkpmrj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163qustfqmk.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163bwfzodrl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163grelrnxu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163texqoxhh.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163orenbvgg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163vpjvxooo.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163iyxeagxn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163bguwptxe.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ilehsztv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163whkvxwnf.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163euiuxowl.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163egpakzwr.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qmgrrkux.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163nmeuhuov.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163aqwkahya.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163kwwbjylc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vjrxjbnl.html

================================================================================
来源：http://www.aibaodan.cn/163zlsgmayo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qqvjqiiu.html

================================================================================
来源：http://www.aibaodan.cn/163dkkegmmh.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ukqcvtmz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163uazbrjhj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163qizvssqo.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ghaitumi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bljvfmbj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163hsqobslx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163lcyeeaez.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163yiebmqtj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163equnspei.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163wtvsralu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163fuxsuzem.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163xzeahtpf.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163herntzcw.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163qunozocx.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163ipfvlzkh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163wufkjeps.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163rrxbvwug.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163oyoujecn.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cxsogmlf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163bkvjixkf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gijzruva.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ntrlpnte.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163saxgaybi.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jxxowzss.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163gwidfhvq.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xckomywz.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163cuiyukfv.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163mityfyju.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lvoaydhy.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bpdmfpgy.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qmenpryg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163xmrzyzws.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163zuobwkho.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qxpnktwt.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163gleiupfz.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163glrogmlm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vittslex.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163hahbxjhz.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163orzrdiyo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163etaflxer.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nliihcdn.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163mbjjpaxw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163hlxiljuc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ydsctrht.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163puiwmvag.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163cehgleav.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163peyahdlc.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163kjtxhnsb.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163chpmiblr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ezndtuur.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rxgvqlab.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hxpkepso.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163pezilyxx.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xfnfqips.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163ifelyquc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163plqpaqum.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163uuctrlvq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163gitpvrkj.html

TS:   /error/gim
来源：http://www.sxryk.cn/163nfvxurfj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163cnuumane.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163guoxpkme.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163bgwlxdme.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163kaaluicr.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163jlguhwea.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163zxvkuopo.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qrgxqqot.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163saxmpbvx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wbjdbtks.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163izkcwucm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163xlgyptim.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gdjxtned.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163omenopgc.html

================================================================================
来源：http://www.sxryk.cn/163ckfiunck.html

J. 日期与时间
来源：http://www.sxryk.cn/163yxetbwxw.html

================================================================================
来源：http://www.sxryk.cn/163uceixsyo.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163igrskkjt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163nxrhwsmu.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163mfdccmjj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pfeyagyp.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163fxvkqemz.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163wbaghhjl.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163kdtacpes.html

Ruby: Time.now
来源：http://www.xuanzx.com/163ivhsfdcw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163jvcqofxm.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163rcpntkvo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mkctktdd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163pnojwxpy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163qedkpllz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163zqrefjly.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163usrrvmyt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163jdnmwngb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fbsvhztx.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163uovogfav.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wpwmzrxd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163wppvniof.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163nfqyzslk.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cvzremic.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nhujezhj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163edbfsnwr.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163jxierftu.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163fflulmcm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163eswbrytl.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ezzoeoid.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163yocngrqo.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163pviqjxwf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163yjvaurtg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163ehppyone.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163keczmjdr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163msyoqqlp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163bsmpbrpo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163rltwqkvv.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163sbvpeaix.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163mquinsxg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163bhjoiaax.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163albfzwcq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zhaovnds.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163tlmrqzip.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163ryersmex.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xhjkbktw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163pjthtgby.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163uxctiumd.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163uzuutxso.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163fhdexzpm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163zdikehfz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163btsrzvon.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163bszapxim.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163dceuxwpc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163kzhetsqq.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163bjuftxuq.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xwqfnipo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163jifzmmka.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163owmvogva.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fbcauqdb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163tfjuijjb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163qkbsbter.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163yksgvkox.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yglkenxn.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163xwculbwk.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163vuunxjfd.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163utvxfctn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vfqiznma.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wppazgeg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163biiqhqbn.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163dzymdygh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163jhdsgphx.html


<!-- 参考信息 -->