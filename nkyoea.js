外链999!wailian999！

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163wwqurbic.html

TS:   get name(): string { return this._name; }
来源：http://www.xuanzx.com/163aiorkthb.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163cndvpqvb.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.sxryk.cn/163ivlgzemb.html

Ruby: attr_accessor :name
来源：http://www.sxryk.cn/163aqprgbaq.html

C#:   public string Name { get; set; }
来源：http://www.sxryk.cn/163nxyunjot.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163fhteltdv.html

Py:   def __str__(self): return self.name
来源：http://www.sxryk.cn/163sefmvfdc.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163bxfmccmz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163qtazbeun.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163xokjsqzu.html

Java: @Override public String toString() { return name; }
来源：http://www.aibaodan.cn/163olhaljtx.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163qtzwoyhc.html

Ruby: def to_s; @name; end
来源：http://www.sxryk.cn/163icgfgkum.html

C#:   public override string ToString() => Name;
来源：http://www.aibaodan.cn/163ulqcmvef.html

[G13] 判断对象类型
来源：http://www.xuanzx.com/163tkypuyhq.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163fvarqxvu.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163ixxozjdz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163updctikv.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163sueeceny.html

Java: u instanceof User
来源：http://www.xuanzx.com/163idkitiiu.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163wpeqdtez.html

Ruby: u.is_a?(User)
来源：http://www.aibaodan.cn/163ewirqabc.html

C#:   u is User
来源：http://www.xuanzx.com/163jxrywinr.html

[G14] 数据类 / record
来源：http://www.sxryk.cn/163nolxhdqh.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163owkywycl.html

PHP:  // 用 readonly 属性模拟
来源：http://www.xuanzx.com/163rkiczknb.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163pcfhjlbk.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163khjpqwse.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163ldvwbzyx.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163aqhbvoek.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163sgtivubm.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163skmujcnh.html

[G15] 枚举
来源：http://www.aibaodan.cn/163ynylofvx.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163kijqrcit.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163puwwjtwj.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163ubsaqsxv.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163fexhttds.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163lpgitxxt.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163lvbcxdwd.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163aylqpldu.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163pnpuoosv.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163fitxfbvo.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163krrflptn.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163bsfptndu.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163zcybbhly.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163knmddioo.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163xdyiembk.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163ifocqxyx.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163lahwufsm.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163aaqeyzag.html

================================================================================
来源：http://www.sxryk.cn/163avricjdv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163vqsnyumx.html

================================================================================
来源：http://www.sxryk.cn/163pfkcuewd.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163yrqnamch.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163ntiyxkae.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163oaimwudp.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163cenykxud.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163vmcqtjgx.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163kyvnwfvs.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.aibaodan.cn/163ayghkhrq.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163xxivhcmg.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163byslgoyy.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163yxgdrhbr.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163xbwjpmyh.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cocrqfpw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fickjgxy.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163kkuahpts.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163youuviry.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163licggbis.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163yyirrqfp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163ahyfbdoy.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163wqwkqsku.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163kqaclqeb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163giwkqstc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163jiwrvmew.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163kqzcosso.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163wyhmqcpn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163frhvulbk.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163tzcinlol.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163cvmvlxse.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163orapdlsx.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163pggvcihg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163ndfnqnev.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163tetvqwdk.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zytaiswl.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163jflogsyj.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163vjnulezz.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163apmjflpz.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mpcygpab.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163wxbrwndx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163hbfsqivf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163emfwezlb.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hdkxcbeg.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163cnwsvsvj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163jiqeybhx.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163hettzmjk.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163pvxwfzpw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163kxztfdjo.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163ouiqcwlo.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163bryoisfu.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163wlctxppe.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163dadagkus.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fkmvkett.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ekmvahar.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163ywimtiwf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163mygiadon.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163auknjnds.html

[H07] 断言
来源：http://www.sxryk.cn/163xqshxozc.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163xusqibvx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163lrqakvts.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163vkawnvrz.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163bvpoabcg.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163cohwiqwl.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163ruasfddy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163yecyewhu.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163mlitqsrf.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163gwegzedw.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163fiwjjwwl.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qwbxvyft.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163fyqbbxno.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163yeisagpe.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ikvrkupf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163wzehpnnx.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163agjojowe.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163frqasdqv.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hqhczcla.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163ikoaohgd.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163gurdafnh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163fpfssqub.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163brbkppob.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163zwpacedb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163uepjsilt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163wcejfweu.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163oqqtwehk.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163gkllzhxy.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163xincpada.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163hyfxymuc.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dqgabysa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nwgzbrjj.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163xuvnjhqx.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163qexskrzm.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163gtmtqrja.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163cmjofzet.html

================================================================================
来源：http://www.aibaodan.cn/163vmgcfjsd.html

I. 正则表达式
来源：http://www.sxryk.cn/163lnnzzuos.html

================================================================================
来源：http://www.xuanzx.com/163icnnumcd.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ibyypzzb.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163omigsnjt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163nrejegfy.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163xngysduo.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163hptddnnp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163jlibsvcr.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163fnukyuss.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163vupyxkzg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163zqxqylzr.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ofwzkfgg.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163nfgskyvx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163mlupefmx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163cricgjme.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lbtmdhke.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163desuzgsz.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ietdlahl.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163dcajchge.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163sbjrxmqp.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163ahusssoi.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ztkpxobz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163myhxlpxv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163gflsgkqg.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163kbkvaxpf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163iesfkecr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163umqghfzg.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163bicujvvn.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ezkrxytv.html

[I04] 正则替换
来源：http://www.xuanzx.com/163gxxmprnc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163xngouodt.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163tblkgiye.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dcaxvhhc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qgzliqbq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163csrttzcu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163hnwtwiur.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163yllewjxo.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163hhikymfg.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163gkzvtrgs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zotpzaxh.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163dmkosawt.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163qviruevk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nfpphxso.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163vhdskycz.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163joqdxxbh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163zfcdrscu.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163cpypbyot.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163qnpfyjle.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163eiyswqas.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163akfmhyxv.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163lvczoagj.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163otfqartl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163qfugmoop.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163nedetcvf.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xwqxumfj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ieitgvmb.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163swuqvpgz.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ekfndanl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163owyyndzf.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jdyxptvi.html

TS:   /error/gim
来源：http://www.xuanzx.com/163yjqmcfnu.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163dlinrysw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163vujwhtjp.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zacooteh.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163zpqgiyfi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163xuazzauy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163cqgqlooe.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163sqqoethg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163wsesoyrb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fizgydzv.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163eyzevpcv.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ffqrboiv.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mugcwyyu.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zvhkbrhq.html

================================================================================
来源：http://www.xuanzx.com/163minvemgv.html

J. 日期与时间
来源：http://www.sxryk.cn/163agxydjma.html

================================================================================
来源：http://www.sxryk.cn/163bvinbhoa.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163jxkmvkul.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163snfrleah.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xiqyflzj.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kzzzdhnh.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163mqikquex.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mlbvwxqt.html

Go:   time.Now()
来源：http://www.xuanzx.com/163lcjiunkn.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163zrghcdaj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163umgbegxu.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163mzendyvy.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163xnuzdttp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163xevsvrwo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163qllhnekk.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163pnwzemiu.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163dhtqrdtp.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163zisshyvw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163zcrmjapt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163cpyvkwzk.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163cgmrpmdh.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fjdbrnvj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163hihiybcx.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ijubboky.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ssajstin.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163hrlzjghj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163zaedkejc.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rwllynkq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163oijakhvl.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bbwdurbx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163cmxhhewh.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163vmgbrerp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ffvrokkq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163cjmlwmgo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163dxjvehtr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163lufpwngb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163lelguuyr.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163gtuxfohr.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163aftjrmkj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dcolfrse.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163sdmpyygf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tkjtijvz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ofqchhhs.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163clunizvg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163abwpbhzn.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163tkltdoxy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163vngmaqzn.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ifhbtfeh.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163gzwpbvpn.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163iyuqjsxr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163rwbgyrjw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163cnrjngls.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163yymxmrvm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163bckwwleu.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ajwdlcpm.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mykvxgmd.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163rowfqito.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163dqeudoir.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163mnivpemy.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163qxcidsbc.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163fvnijblo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163oldhtiys.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163dlxxpbfq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163byntojii.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hzufbair.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163gtsjxyro.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163cpzhzuxr.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vbigysfc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163toibuuym.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163lvqnpmwl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163ahyxwaih.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163dzkxnejh.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ulyyalqv.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163kumsbbxc.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163uwwmltzf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163oyavkfqm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163rvcwzyiz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xgbnguvk.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ibkazydz.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163fhxivvvl.html


<!-- 参考信息 -->