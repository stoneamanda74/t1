外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163jppngijn.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163cakmqfmi.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163frbooqsn.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.aibaodan.cn/163ufbcxtvz.html

JS:   get name() { return this._name; }
来源：http://www.aibaodan.cn/163tchefhbr.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163ehxbijjx.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ameupjga.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163nyshpwhv.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163ayywrdod.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163banzrxsr.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163pqmoqjjp.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163bijtzice.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163uzevgyxa.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163hkuzjuuc.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163chjcdspw.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163nevwulpz.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163bbhqjlzj.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163sbqvphnz.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163weesvmxv.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163usollokn.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163boecfsta.html

PHP:  $u instanceof User
来源：http://www.sxryk.cn/163kdfwlysw.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163dozqlnec.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163mmvtuqvf.html

Java: u instanceof User
来源：http://www.aibaodan.cn/163ujyeulfp.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163encbypjs.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163txennwci.html

C#:   u is User
来源：http://www.aibaodan.cn/163ltfxbust.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163uwbnjwhh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.sxryk.cn/163smvdoqyp.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163dsszlukb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163semajvtz.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163vzzsiqyq.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163gtubplgx.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163eefnufhg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163kaqvmind.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163rzkpebsk.html

[G15] 枚举
来源：http://www.aibaodan.cn/163gvktjlnz.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163dkfiapzr.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163enncoisd.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163qspgwvud.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163sqkrzetr.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163xqtpzobi.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163jquxqpfg.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163slxxvpil.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163todgpxsg.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163xlmvzrre.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163dqykiqjd.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163rroivktn.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163odwzletu.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163ekugvjob.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163ynwhgvgu.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163xujxutlr.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163gpaloshr.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163ihfotjvg.html

================================================================================
来源：http://www.sxryk.cn/163oxrjhgxt.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163xoxmcyoq.html

================================================================================
来源：http://www.sxryk.cn/163mapezsll.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163spfmebuf.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163axpnosqe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163rgckgldg.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163xqgvbjfe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163rbmdntsh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163kcntgsll.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163cdzjastn.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163zulkkrru.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163vbfqwvtw.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163dtyycboh.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163sdahdkci.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163nlzizbfh.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163pettxaqo.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163atigjhqk.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163mmqqldva.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ppuiricl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163lucpzpgc.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163shjxghpy.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163rasenxvv.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163bzuwdzjg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163rzbcyjeu.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163uoxhyepk.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163bgugdyia.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163hkmdmioe.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163wmzweyub.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163twwuatst.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163zemxevbf.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163ywvoznul.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163dnzbwgaf.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163usgqpsxa.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163whljpgvv.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qaqjreay.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163xreypwve.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163hdzmztse.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163aiapsiog.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163nypcamtg.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163gtntsvmr.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163yyldpmik.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163pjijwfez.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163biudsxhi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bwjpfqsn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163bvppcyct.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163gxwzrigu.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163lxckzogw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163xxgafizq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163zwnbhyco.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163qiufgdmd.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163prcdaqig.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fkfemcfh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163amwmpkbt.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163orsoymbr.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163iwynovur.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163avrzqqgx.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lbcvnbau.html

[H07] 断言
来源：http://www.aibaodan.cn/163jexoolew.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163uproxymm.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163uurvcmzv.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lxlyidjh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bnxgexnb.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163naumtuvy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163bkrobtdt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163veypouur.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163eqsohztj.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163jndwfbgx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163jhvaeplq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lhlpezsk.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163uzpzdejs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163htnojyha.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163hriaebxu.html

Go:   err.Error()
来源：http://www.sxryk.cn/163zzegrhdq.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163qjocnnyc.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163sydkykjp.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163uhefpmgw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163cfgoynvm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ldntcedy.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163ktqqnunb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163yvtlxuoz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ichdnjpo.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163harqprgv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163uupfjkpg.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163rjibmbrk.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163rxewqzum.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ymekuifv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163acjmcvsn.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163wgusfizh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163oaqdqpem.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163pqlssyib.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163mfxgqtxn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pgwlpkga.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cwgovxpb.html

================================================================================
来源：http://www.xuanzx.com/163ihbkkrvq.html

I. 正则表达式
来源：http://www.sxryk.cn/163skrkaiju.html

================================================================================
来源：http://www.sxryk.cn/163nglxlxtg.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163khvysgmz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163mswdxiac.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163kgxzsifo.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163kfozrqor.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163przaticx.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163tthhghdl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163aqmozjch.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ihsklyfe.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163ftvetzeo.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ruuhytjy.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163ieigyoze.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ipribpuy.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ynumifjz.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ahxmbnvz.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163nwktbcfi.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163opindxpe.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163reoaaqbo.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163rovknvvv.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163crkzkdmq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ucxufqbx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ivprnjuk.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163meyihknv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163dhlcvgwd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163nbnyuqen.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163gbsqnemo.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163ltmnvkyp.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163mihdwyge.html

[I04] 正则替换
来源：http://www.xuanzx.com/163imyydacb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163eyngsyta.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163quqdgloq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163yhoibeiz.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ddeiaaoe.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163qdybusmm.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163moaelmkb.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163bakegiko.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163pdvksats.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163tjclejcx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163rlumvtcy.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163vbsimbeh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rqfwheyx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pmqdzjvg.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163aubjqwwc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163rdgyrgev.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163rmberzfp.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163bqjtybxp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163kudylfsz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163afiahkok.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163eghtycef.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163jlnyfisi.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163nyebfwgr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163unufakyo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163qobvswty.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163smwbpdqw.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163dlcwtayl.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163aypchjmi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163kagdqdtg.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ggikyfaq.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163qbajicvv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163yrxctmpq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163daocblfq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163awrtuykt.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163fddyjdax.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163wxccvuue.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163eftwigzp.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mbobmppm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pecunjno.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163crmrzdnx.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163naqwtxdy.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163yrrvtutl.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rrpviwhj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163gevekurh.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163navuxlrz.html

================================================================================
来源：http://www.sxryk.cn/163ppguviwy.html

J. 日期与时间
来源：http://www.xuanzx.com/163ufqaffvc.html

================================================================================
来源：http://www.aibaodan.cn/163nhwxcfhr.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163fdmopmeu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163tueqtaex.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163yoehinfi.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163zpugdjne.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kapyrknf.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163npgapstj.html

Go:   time.Now()
来源：http://www.sxryk.cn/163gxhonrwy.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163orvxumlq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163xjikgnuw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163egfyxxku.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163jtwmccur.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gltlsisc.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163yuxwoxdw.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163iuwcvzdw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lklgnsve.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163fqynnwzp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163mkaymbks.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163mlskhozc.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163lzabmgtt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163eyfubgsg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163cuphymqg.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163vowsgtbj.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163avvykytj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ugadybkw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tltnhxoh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163cqhsqusg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163vkwbjahf.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163ovkoecnt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163wexjuyig.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163lejymaaw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163uvxghqzq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163bgyvswnw.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163voocbtvt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163oklnahec.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163veotmbew.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163hprwkxcr.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163uvjruxnt.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163uhwviziu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gktlvvpg.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wexiormh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163jrreqolk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163uyiprztv.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qqhxharo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jlsgqrzp.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163snlkfnxs.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163moaeqwol.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163rsvmlnqc.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163jnczjgfj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163jfqohgjm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vwvujfom.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fsavytui.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163qpuimjlr.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163knaqqsnh.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jqwfusua.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163xgghwzkv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rrmnswof.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163odhzpyou.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hqqpecof.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ojwdjgws.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163wdcwnsrb.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163bpokfuxt.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yayleldc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163thgwwuey.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163hwxwapwj.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163uppwglux.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163krjkvlrc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wgmeutlj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163rzuagbws.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163rebqvoxm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163otxkuakc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163owbsxqoj.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ahppmefh.html

[J09] 时区处理
来源：http://www.sxryk.cn/163nzjfvwou.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163cxxfexsd.html


<!-- 参考信息 -->