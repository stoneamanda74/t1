外链999!wailian999！

Ruby: super
来源：http://www.sxryk.cn/163pzjzhmrv.html

C#:   base.Greet();
来源：http://www.xuanzx.com/163kxzapcsv.html

[G08] 静态方法与属性
来源：http://www.aibaodan.cn/163zitczfez.html

Py:   @staticmethod⏎def f(): ...      # 类方法用 @classmethod，首个参数为 cls
来源：http://www.aibaodan.cn/163uoiohhyf.html

PHP:  public static function f() {}
来源：http://www.xuanzx.com/163eaaguqjf.html

JS:   static f() {}
来源：http://www.aibaodan.cn/163dckywvcq.html

TS:   static f(): void {}
来源：http://www.aibaodan.cn/163ohtivycc.html

Java: static void f() {}
来源：http://www.xuanzx.com/163cfmsmgqv.html

Go:   // 无 static：用包级函数，按包名调用
来源：http://www.sxryk.cn/163rqezimjc.html

Ruby: def self.f; end
来源：http://www.xuanzx.com/163vjjlviad.html

C#:   public static void F() {}
来源：http://www.xuanzx.com/163jghbirho.html

[G09] 接口 / 抽象类
来源：http://www.aibaodan.cn/163voawjexe.html

Py:   from abc import ABC, abstractmethod
来源：http://www.xuanzx.com/163hciumvyr.html

PHP:  interface Shape { public function area(): float; }
来源：http://www.sxryk.cn/163hyyzprkp.html

JS:   // 无接口：靠约定或 JSDoc
来源：http://www.xuanzx.com/163exgbnoup.html

TS:   interface Shape { area(): number; }
来源：http://www.aibaodan.cn/163fpczgmbl.html

Java: interface Shape { double area(); }
来源：http://www.aibaodan.cn/163bgiiowss.html

Go:   type Shape interface { Area() float64 }
来源：http://www.xuanzx.com/163rlhevwcj.html

Ruby: # 无接口：用 module 混入或鸭子类型
来源：http://www.xuanzx.com/163vylqyffy.html

C#:   interface IShape { double Area(); }
来源：http://www.xuanzx.com/163fcddapzc.html

[G10] 访问控制
来源：http://www.xuanzx.com/163memhiifs.html

Py:   约定 _protected / __private（不强制）
来源：http://www.sxryk.cn/163hfsebnhz.html

PHP:  public / protected / private
来源：http://www.sxryk.cn/163twiiyoph.html

JS:   #private 字段；其余公开
来源：http://www.xuanzx.com/163cbquyweo.html

TS:   public / protected / private
来源：http://www.aibaodan.cn/163emgrtlzi.html

Java: public / protected / private / 默认包级
来源：http://www.sxryk.cn/163pdmpnwvu.html

Go:   首字母大写可导出，小写仅包内可见
来源：http://www.aibaodan.cn/163spianzzw.html

Ruby: public / protected / private
来源：http://www.sxryk.cn/163hqjnthuh.html

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163sukneewv.html

[G11] getter / setter
来源：http://www.sxryk.cn/163lhalvjqg.html

Py:   @property 与 @x.setter
来源：http://www.xuanzx.com/163vpvivfux.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163xndfqqkd.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wlzjposc.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lgwryxsr.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163wiipewar.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.xuanzx.com/163psfnwxfm.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163wzbpivai.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163niohlirg.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163nintbtcl.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163yzijthmc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163pjgqgool.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163asnaagku.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163cpgaoojm.html

Java: @Override public String toString() { return name; }
来源：http://www.xuanzx.com/163qdhcinkk.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163bvrcrllm.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163zgmozthi.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163kybqijza.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163xffxfgyo.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163owhfmsxs.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163eycjptgs.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163afihqyil.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ebqhejvt.html

Java: u instanceof User
来源：http://www.xuanzx.com/163ziktpzvz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163gbrxmthk.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163phumyljw.html

C#:   u is User
来源：http://www.xuanzx.com/163nqexnjts.html

[G14] 数据类 / record
来源：http://www.xuanzx.com/163wmmvbvfq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163wlreojzq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163tzpgwiin.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163dhclvsbf.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163cdxukrnw.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163vzndrnkf.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163pnrxdijp.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163ryondvlw.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163adtpgqcs.html

[G15] 枚举
来源：http://www.aibaodan.cn/163cjcbmrhn.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163kknboivh.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163yiccvmwz.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163wcuarieo.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163wwsuqlaj.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163yrdkyfzf.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163kqzojbrd.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163wzlivmzr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163jhqlcsjx.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163ikpgytot.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163hsajcemq.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163byczycsz.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163rvesetad.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163dlsqhlit.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163wnmozedx.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mkbhousg.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163dkuxifvs.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163xxvtcdye.html

================================================================================
来源：http://www.sxryk.cn/163rvjbtcsh.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163lfvtddtg.html

================================================================================
来源：http://www.aibaodan.cn/163ptghwjtm.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163fmrtbrxr.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163dvtbolhq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.xuanzx.com/163bbbbbjnh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163adcrgozn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163zqnvpomj.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163cbznnqvc.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163fdunpnif.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xgpqnrfr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163bllkzqhw.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163gbumzogu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ehtsxmml.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163nkbauyxs.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fptodqkp.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163uleprwzp.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163ijqjksvv.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163aicrmjvh.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163tskxchhn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163zvkszayh.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163myjixgxj.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163sezsquvc.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vqszhcau.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163mtbtythk.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163amsdvroe.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ryozcfns.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163orfyywkz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163pjihmtah.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163jqzxdcsd.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163dgiwuhgn.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ueazccwe.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ntxzuuea.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tuieuhmr.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zjbopwlc.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163oebjqiou.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163joribvbt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163lrbzwefx.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qpgrqnqk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163aemmmzhz.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163uempztsb.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163stfsdrea.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zkuaxnib.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163siiczsqi.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163fxhzxjym.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163dqpcrpzj.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163ysbgezgm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163yqkhiadp.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163kkutbwiw.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163nvvjlaxl.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163tksxhlkl.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163qhcufhvc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163czumpkdc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163nrlivuft.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jrzetyag.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kuhoveiz.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163sutmhxyj.html

[H07] 断言
来源：http://www.aibaodan.cn/163cmyykzxp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zbkrzxhy.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163xwvzjhca.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163pbdtmaym.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xueqyxgp.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163uvjpcyxa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163qsnkwizm.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163yiwslpfv.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cvhghpyw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163hjwsmroi.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ypwfqsys.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163lllxtogg.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163fljhfkfm.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163jqcoaumz.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163rwgqluuq.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163gmiwtwqp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163bobkhkip.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163jtgfequm.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qxbavtkf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163qubrkvqc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163jilqiitl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163deyhrjna.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163symkmfst.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163zlzixajg.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163lkjipqhs.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163gbuggtxk.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qyddxugf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163hndihbsm.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163tfqvltcj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163oezcqzam.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jxryhvoo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163xqytesej.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163fgpqperv.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163jwgfjupj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163mfkndfgi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wkvndmqt.html

================================================================================
来源：http://www.aibaodan.cn/163grwxgjvb.html

I. 正则表达式
来源：http://www.xuanzx.com/163wvtfmwru.html

================================================================================
来源：http://www.xuanzx.com/163auvadoef.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ivqrgpoj.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163fbyanjgb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163xskohpej.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163owsercmj.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ulgortcb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ulpdxopl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163bnpwcmll.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163rhjyrjsq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163hehbssbt.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163gnhpvebr.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163nwxivfjz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163rhnzjveu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163xokxfrbe.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163lalrloba.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163rywhdemc.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163lgxvlhht.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163aetnczrc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163odzchnkk.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163vgpfrtxj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163kxvkhscm.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163lmobqifp.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163lddwxyqm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163tsufousm.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hijffkjf.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163kykhrvxg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163klujrnfv.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163blmaghwk.html

[I04] 正则替换
来源：http://www.sxryk.cn/163pdkjduvg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163pzcinvno.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163esitvwhz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ccfepxda.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rlsjsgxu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163hkpuqeia.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163eiqfhzyg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163fewdwxoc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163qpbmfqoc.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163vpmdbhty.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163kjzefioo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163gossuwcp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rlzvvfab.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163czaqddfi.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163utiyfjst.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163fkxieegr.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hfysarqg.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163lodvpzlq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ledznupc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163knfuzibz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163qficphwg.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163lqrsiqvv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qsvfuauh.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163tubjfvuv.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163vhnhaclk.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163hmdtuhsu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fvedjjuu.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163qytjuezn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bscfevfz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163auigabrp.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163qhyxpcqe.html

TS:   /error/gim
来源：http://www.sxryk.cn/163fwczefds.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ipqiqukn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163qtizxgec.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163mfahamzt.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163yykvswhx.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163sieaivfl.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163vtfspkto.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163nnqiyguv.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xnjpzmzp.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163pnzodbzx.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163clebmher.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163pwhgoiii.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163oggjmvaq.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163okuqclzm.html

================================================================================
来源：http://www.xuanzx.com/163wymuijhm.html

J. 日期与时间
来源：http://www.sxryk.cn/163aumfuuip.html

================================================================================
来源：http://www.xuanzx.com/163dlpisjdr.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163ytsvmhkd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163espbjsxc.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163dcdpgkcg.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163gcyvwxef.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ngwckfha.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163vfthjgmm.html

Go:   time.Now()
来源：http://www.sxryk.cn/163sdizeqax.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163fesoxuem.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xhmwvtdf.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163uhtanmks.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163qtvrnwgb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163inztzpys.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163xkzqqxhx.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163uyevjeic.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163edzermqb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qxbbinee.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163thgumjnj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163iogtcfwj.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163bgbyjlqg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163temoiwgv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ikrujyst.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xlieciuj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163gdqzajvz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163jmftfzxw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163glvweyyb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163eycxtemm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163eotedzoc.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163asubbqbr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163rsdgptvs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ipkjzlfb.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163kzzzmoom.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163kistpedp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163nyfoauus.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163hwjokyyy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bfzqaoxy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163muiwldtf.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ypbvlqec.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163tnroikpf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163telhbfmp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163iifyfjtt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163symeowwg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vzmfkhyv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163heyeigxx.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163jjokzcnk.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163vjomhnpx.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163njoepffv.html


<!-- 参考信息 -->