外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.aibaodan.cn/163lxkqaevp.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163nspzojlz.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163qausarji.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.xuanzx.com/163tizqngpw.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163khzhgvxj.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163wdugcwoe.html

Java: public String getName() { return name; }
来源：http://www.aibaodan.cn/163ljxwrmip.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163kjkyhsaz.html

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163hzfdloih.html

C#:   public string Name { get; set; }
来源：http://www.aibaodan.cn/163nzunucuf.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163itytcpqz.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163mzzshybi.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163awfsgxbn.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163xdwmteja.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163wzdexvda.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163onffpewo.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163xpcvqjtd.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163tymzheau.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163yzvryijo.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163pnphwfyv.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163qfvnllfd.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163yeyebopd.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163cfagvpfo.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163ldpwlohf.html

Java: u instanceof User
来源：http://www.sxryk.cn/163kkxhakta.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.sxryk.cn/163blgzbvqs.html

Ruby: u.is_a?(User)
来源：http://www.sxryk.cn/163apursdfk.html

C#:   u is User
来源：http://www.aibaodan.cn/163qtnztkio.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163kghdcbaw.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163tsibowks.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163thdctnqk.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163hcdosbxi.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163jtjkaivh.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163yitqewsi.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163prlglefh.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163qpimisvi.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163tzmuvyeu.html

[G15] 枚举
来源：http://www.aibaodan.cn/163mchnmctl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hbtijxxo.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163wmgylfdf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163kexhfegd.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163ublavjif.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163kzennsjj.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163bmrcqmyz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163dyqcfqza.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163zwsghqxp.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163aezwvfbb.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163trbdmcha.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163mdcodyjl.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163qanwircl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163tkvnsebu.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tlxqklbb.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163fsrzgfcq.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tjsfgqgt.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163cvfnbaly.html

================================================================================
来源：http://www.xuanzx.com/163kbbtiyno.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163htipwtwz.html

================================================================================
来源：http://www.sxryk.cn/163wutldtoy.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163tqrhwruu.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163ggpcvlnn.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163frwzoleh.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ehxobeqk.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163fspzgxuz.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163iduynykf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163fygzjpro.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163vyqflmez.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163dgsaezgr.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163zxmlaocu.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163ppkmfgkc.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163fltgmakw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163uhyoewuy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163tmhascyj.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gpdwcvlm.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163ixmignfx.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163pqvvkeuj.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163qrkekbbo.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163xzcdxzfi.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163urnhzzzj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163ceplzexj.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uwpowkzp.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163errhskby.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163izjrtnex.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163scimmrld.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163zdxsmaje.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163aressxyl.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163xmyaxzke.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163qrwrwdyv.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163qycwwsch.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163qqcihlbx.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163rmfercot.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163vwkqdzzn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163jcimwaud.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163nohojmra.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163utukfggd.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163kxctztwp.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163otgagkng.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ispfeilx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163fyltuwas.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163tmeecrbg.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163sbuguqah.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163bcdewahe.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163zugehuuw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163zrwzzzia.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163mufvsrfm.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pelspzbx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163pbhbhfpz.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mztdbrgy.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163djhqditj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163slxxmwib.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163eaqeriwf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163jexfygvw.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163cmtsapiv.html

[H07] 断言
来源：http://www.sxryk.cn/163jzsgyghx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xqnjzgaz.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163pqnixmeu.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163liipcrgg.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bbfdymmn.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163zvnhsaxz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163vgborxig.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163zdbokhvm.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163dmnuxpmd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163lmssmguh.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163coqbtlie.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163puustlpn.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163naptyuig.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163kasmoxze.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kdifflkm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163kapxhkuw.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ktkqhluj.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163cezaafxb.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163gaokwsvm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163qotmzpsc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163yjeuwsit.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163deqnllhn.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163suqhjkej.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163usseoffr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163vngaxgnm.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163mylauueo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163fjaxqosf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163mlfwjtqb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ydxmhqqv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163depvnvoj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kbvwllde.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163psohyfty.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163koqlspps.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jyihtyrd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163chxaqtol.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163vswcqurf.html

================================================================================
来源：http://www.xuanzx.com/163tkzpctqt.html

I. 正则表达式
来源：http://www.sxryk.cn/163ljtqubkf.html

================================================================================
来源：http://www.xuanzx.com/163mffqrtos.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vozcgrcm.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163nhqbtioo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pffbwhqp.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fzhocclz.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vawfojtp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163awcrstqm.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163fptffvtw.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bytgzyry.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163dxuzxyzc.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163nupmowmf.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qjpdmacv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ahhylxvq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163zaqvjffw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163lpimnkrk.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163ywstcbgj.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163eouawdea.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163efjcaxpm.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ogipdtql.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163kmmwedmn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163urldstka.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163sqdbbdaw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163ndvdsfdj.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163oaxoesic.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163wadaqiiu.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163hnnmagze.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163fzwcqzap.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mskmtbzb.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163seldpjvj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163sxnhfjaa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pepbxmbq.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163itlqiuhf.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163qfaudbla.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xdfhuxhp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163uzeyshqy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163yegflfhy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163afjsshdp.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163cefkjvty.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163jvihrryq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163qknziodn.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163aundjbqn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163umhlnjrf.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163cixlpuuk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163guukgghk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163dswycrft.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163bkjxzpvn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163kxpjpwok.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xgkrgoaj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163gssjbvrj.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163mgbitmnw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163aownuwrp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163hrgdvdlx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163swxsnvnu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rprzfudv.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gxbvonlr.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163uwzawfqq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163effekfzv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163buppnthe.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163jiqhfute.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xehkvlyh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163anbzcikg.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163tdigspmh.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163itzcqdjz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163bnzogyhk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163kqzslcxs.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ateabfnh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ibrgyccy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ycwklgsv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163xisccjdd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163vqqsbwcn.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163krfmouhi.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qphzccmz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ctkluhrm.html

================================================================================
来源：http://www.aibaodan.cn/163njzegqoc.html

J. 日期与时间
来源：http://www.xuanzx.com/163tkwvujjq.html

================================================================================
来源：http://www.xuanzx.com/163codzghdv.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163lzhsifey.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163hbxiplzw.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163cxnilddf.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lfsgelbr.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ithemcyl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163anqfuaxc.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163aelzbmbp.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163yhuwzqbw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163vtmrokya.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fftkhxnn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163uspcwbtj.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163azzxdpeu.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163nsjvtnqj.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163adgvkrqy.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163vzszuyps.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163oczzbjmn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163olnquqxc.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gijkkgip.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163ulvoxvmn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163ydhxetij.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163flgxwgbq.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163hgsqayua.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163odjbbwll.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163mflavjsp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163lfrqraxr.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163unsrromi.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163skegmloa.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gznywpyr.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ptkgbyar.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163zoryajoq.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ytxjdgkd.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163yizhrnol.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163phhkuvru.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163nlpwvqdz.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163dgdixvbr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163xsbxqxol.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163tcasxqwy.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163fyrwqxxu.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163tasnumwd.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rzkiplvt.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163iazwfele.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rxynofdi.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163sbecxqgw.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163evfsonxw.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163belejmad.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163ulkqkklj.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163ilkbejbe.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163skkmquil.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163wozaupmm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163muivnlvq.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163mkluuogs.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163wlwneokr.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rpkagkbj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163duedfkfv.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lvfuedax.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163fhkvyhep.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163swospnrq.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163enepznpf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nxreuqoh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163kbvcxuya.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163twqfthlv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163diboesjt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eelmuilw.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163rkzpalnx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163ptmquqjz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163kujcwhvl.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163yhcxmwvs.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163gqbabnpw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163yfmgbksr.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163vosdhrgs.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163snjqnodu.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163evvanwsy.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163erojjriz.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163lizrpknx.html


<!-- 参考信息 -->