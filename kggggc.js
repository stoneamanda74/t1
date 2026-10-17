外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163anlmuyrq.html

[G11] getter / setter
来源：http://www.xuanzx.com/163xqgpniop.html

Py:   @property 与 @x.setter
来源：http://www.aibaodan.cn/163blblyrie.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163nljnhfhg.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163tmxbzxzy.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163hhnwlgwv.html

Java: public String getName() { return name; }
来源：http://www.xuanzx.com/163fodmhymj.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ajwogtzh.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163ythcnbxh.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163fznyfnou.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163cebqculc.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163tvtzmaux.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.xuanzx.com/163zbqwwlsl.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163bvangkwg.html

TS:   toString(): string { return this.name; }
来源：http://www.sxryk.cn/163zupedojv.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163hrmhiimg.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163mqvqpknz.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163gohovhcw.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163pavraadx.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163begdfehp.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163gtrkxdpb.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163wauogslp.html

JS:   u instanceof User
来源：http://www.aibaodan.cn/163ejhagbfc.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163uxntrlqy.html

Java: u instanceof User
来源：http://www.xuanzx.com/163zkgcquts.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163fzvqpbuu.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163xptoamqi.html

C#:   u is User
来源：http://www.sxryk.cn/163epzilveq.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163fhonajcy.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163rvfzmyjy.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163fuqsbsgm.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163vcxcdpgw.html

TS:   type User = { name: string; age: number };
来源：http://www.aibaodan.cn/163eabzmabd.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163zmlppktg.html

Go:   type User struct { Name string; Age int }
来源：http://www.xuanzx.com/163rhgxlzcx.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163oorxsosz.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163ykdzpwzl.html

[G15] 枚举
来源：http://www.xuanzx.com/163fymsgaco.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163gthpqstw.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163ijnfmkjm.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163smokwxjc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163huwpkfnq.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163uxgmyymr.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163tuzjsfif.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163usfqylit.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163mvkkohdy.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163bbogtlir.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163yfjctmzr.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163vdxvaxkk.html

JS:   Object.entries(obj)
来源：http://www.xuanzx.com/163xgaufxsj.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163phiovffr.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163vxttuocg.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163vcyjjlny.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163ercjvuou.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163lieqeijf.html

================================================================================
来源：http://www.aibaodan.cn/163wlpxuzvl.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163qptjdlai.html

================================================================================
来源：http://www.aibaodan.cn/163ycwtrxuf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163vzdnyaaa.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163flaorqyf.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163patusvjm.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163vgyopynu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163arqvavzy.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163phkwttmv.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163lblmcqkr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163aruwwciw.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163lcijmtsj.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163lxautzfa.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163klqmbxmk.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163aeqrdanm.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163coadnwnt.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ryksqevz.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ervjbxup.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ngqvktvc.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163cddsowei.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163nhumuurb.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163lciiuzer.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163aovatcpq.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163aazfwnxk.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163lhnrlqbk.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163rqfvwgxi.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163kulgcnxf.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163ubyphyck.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ezpkumpq.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163achnansg.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163cippllek.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163gbsuungl.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ovbdttnv.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163djvfuqvm.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163ynzjbhnt.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163bucoujwk.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163hauikrxt.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163twrivlmv.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163ezgclwex.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163awbtqbuz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163utvoekvu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163uprqhhyk.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163ptrgpnyj.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163zozhmbne.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163lnsgrfqu.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163pqhfqdqx.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ytznxiti.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xwdcvhcj.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163fxvwmodi.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163iwrlyemy.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163aioknzic.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163raqtcwdm.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163odoxhbfw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163wyfzcumd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163dxqnxntq.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163tiwcdfrv.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163gehqahxa.html

[H07] 断言
来源：http://www.sxryk.cn/163bvduzmre.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163zznsumpp.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163nbijsday.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163niqiwbar.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163zetspkqs.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163wdwklfuc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mgemigfy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163qbzmaoxk.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mhlhklhw.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163czpeahgb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163lmdrgjxj.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163jmayalmk.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ytqzjtlx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163rbzwvvwc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163qjqzqmtm.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rdwslnlj.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163vkeftwtg.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163qyjrsoot.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163mhpmidzv.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163fzdublgs.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ukotqqks.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163tafkpikj.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163ocwscvkg.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hvyzmutu.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qxzvihbg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163trkgwaqm.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bocgimuy.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163sgeqylpr.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163lnmyieax.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163wlpmyqvq.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163cvsnwhtg.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rxwjutzk.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163kprbgbfn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dgqtkoal.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163ujiuomdb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163qdrselmw.html

================================================================================
来源：http://www.xuanzx.com/163fbqegswj.html

I. 正则表达式
来源：http://www.xuanzx.com/163tyzpbccn.html

================================================================================
来源：http://www.sxryk.cn/163itmvyuww.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163zqwqngli.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163vrfpokzv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163smlodunr.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vuukveqh.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qckpxszj.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jguqyddd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vdkydfau.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163oqtdmfos.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163gcdsoyud.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163lakmvusu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163edonjzar.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rzsmchuu.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163unvtcrfv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163oydlwhqk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163zxwisqsq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163djovclpw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163xdvxyxio.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163mihuxboc.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163tqrzlqqp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163poiwioas.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163gfjxmhvs.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163zbqmanni.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dforxenk.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163guqbvhjn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163vunjwjgu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163avyjzayj.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163wobtysgy.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163enjryiip.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163kmjviuca.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163kpepzbgl.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zayegjun.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cjzkrbgl.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ovvhmjxt.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163grvtgwly.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163iqloyuxh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163qxsnrflm.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163mhtnvrkk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163titlpdve.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163egdlhfvm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cxgsmxfl.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163fjyqjcrq.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163iqawkpfg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163kzgbcgzs.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163btzeoixy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ibrrhusm.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163yeixgwkn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hgamkpvf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163gtmzfpgf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163joehxdpn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163wquwcprq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163nslusyon.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163rejovobw.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163lrprdjef.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163czaemwya.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163artpkuzk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jgevvgrf.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163mxpmfigh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ijaosvqq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163kfqgqmlt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163wlehrfgs.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163jdipweep.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163zeyrzxfe.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163hiwxjvvq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163grzwrfxr.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163pkqcvbww.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hfttzbiy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163vakqrjsc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163orebonsl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163qgrhwwuw.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163apbvjvzh.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163xbudasnv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163brytmtfn.html

================================================================================
来源：http://www.sxryk.cn/163qzbvzshd.html

J. 日期与时间
来源：http://www.xuanzx.com/163jggvdsjj.html

================================================================================
来源：http://www.xuanzx.com/163sytnbbnm.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163phldpsdw.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163hrfagigt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wqkuomcx.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163egeqknrb.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163aijaanye.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163ezjxnjyl.html

Go:   time.Now()
来源：http://www.sxryk.cn/163kyuaxpvs.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163imwwojyy.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163fmajmjhw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163dconcoov.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xhsatcoq.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hdqfzmnl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163lelpfogk.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163jqaezucz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163siriekfk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163willthok.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163rfdahpil.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163cvvircew.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163slqlzxdg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163mzlgyyov.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163qskskhnj.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163gotbogtb.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ilxjpgip.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163kvlaprbc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163xdzzgfvy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163sxyvnahp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163cydzrahm.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163kndovium.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ymhnlvdg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fgyklcut.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163wyuzgzab.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163fotdznrp.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163uwkfjpxi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rqckhtfk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bjgbheyb.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163liitetnn.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163lgruahyc.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163rgevbyzz.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163cmxajlyt.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ydnpnscy.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jwpigijc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163gmnhfsle.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163vcyswqdz.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163flwbcazh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163xsflmjip.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163vfwknqen.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ngdmbafq.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163omurtbaz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163mzrqdrqx.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163phajyvdb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163aszcgrsq.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163nnwoffsk.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163vvncityu.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163mvcflhpv.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163eyzqijpw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163hvfqltgb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163nuffjoeo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nvlzcksv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163xxzcomjo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vzelcrie.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163enegzbbd.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163kblorvdy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163flhbqntm.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163sshnzsgz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163zyyormyp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163soiigazz.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ilmdlxfo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163eehvowiw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yysujdji.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kzllkczo.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ablnnhxz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163zustpvwo.html

[J09] 时区处理
来源：http://www.xuanzx.com/163agufpqfw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163cwnucuru.html


<!-- 参考信息 -->