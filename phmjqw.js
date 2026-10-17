外链999!wailian999！

C#:   public / protected / private / internal
来源：http://www.xuanzx.com/163syyqzpab.html

[G11] getter / setter
来源：http://www.aibaodan.cn/163ceztcbdy.html

Py:   @property 与 @x.setter
来源：http://www.sxryk.cn/163sdsrcfsp.html

PHP:  public function getName(): string { return $this->name; }
来源：http://www.sxryk.cn/163xhglloea.html

JS:   get name() { return this._name; }
来源：http://www.xuanzx.com/163smhimhgx.html

TS:   get name(): string { return this._name; }
来源：http://www.aibaodan.cn/163lhtfizap.html

Java: public String getName() { return name; }
来源：http://www.sxryk.cn/163gajmnztn.html

Go:   func (u User) GetName() string { return u.Name }
来源：http://www.aibaodan.cn/163asyonwry.html

Ruby: attr_accessor :name
来源：http://www.aibaodan.cn/163zwtmjnrr.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163dajmfycw.html

[G12] 对象转字符串
来源：http://www.xuanzx.com/163bhqnjbrz.html

Py:   def __str__(self): return self.name
来源：http://www.aibaodan.cn/163dtpfshyo.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163hdlobqhb.html

JS:   toString() { return this.name; }
来源：http://www.sxryk.cn/163pvzeimip.html

TS:   toString(): string { return this.name; }
来源：http://www.aibaodan.cn/163otwugbyn.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163xlhduwlr.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.sxryk.cn/163lcvbowny.html

Ruby: def to_s; @name; end
来源：http://www.aibaodan.cn/163adacangw.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163lbynjyge.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163mdeurnrh.html

Py:   isinstance(u, User)
来源：http://www.aibaodan.cn/163pybqtfbg.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163rvazfljz.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163mrdyrgpb.html

TS:   u instanceof User
来源：http://www.aibaodan.cn/163eziipylk.html

Java: u instanceof User
来源：http://www.sxryk.cn/163vlbnrhht.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163ovjunozs.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163ifzvoiya.html

C#:   u is User
来源：http://www.xuanzx.com/163oxfbjnjx.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163tffryxpa.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163qasoxvkq.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163wxhnsenv.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163pnsnicyb.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163unkkbsmc.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163fxpycqib.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163jmjtwnwc.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163ewfpjgmn.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163hjpgvqrl.html

[G15] 枚举
来源：http://www.xuanzx.com/163vqvypdpk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163qwnancqf.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163zbeidrjb.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163dzqveqjs.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163sgtajimg.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163efnhwbhq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163heqqlcsz.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163ikfxvhsk.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tqtvhqtx.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163kfieodxj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163wlwcioed.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163znhvuonx.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163udbtjcko.html

TS:   Object.entries(obj)
来源：http://www.xuanzx.com/163swlozhfa.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163zqxzwwtz.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163hlopkgfo.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163uyhduvqg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.xuanzx.com/163nshcqflb.html

================================================================================
来源：http://www.sxryk.cn/163umuudnjr.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163sealykad.html

================================================================================
来源：http://www.aibaodan.cn/163cfbmumfb.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163dlboejbl.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.sxryk.cn/163oomuxkem.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163uixrmfag.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163ttisqmgi.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163swdcazgk.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163jukcnctf.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163xdrnommb.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163wucawxsn.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163glxyoibp.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163hfcqbmhv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163qrboocdl.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163hjkfsuwp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163okxrflgc.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163odcauivq.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163byvjixcs.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163usfqovkb.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163yuqrxnis.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163iteyujtz.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163frdaaure.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163lsxekbnl.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163vyxkekpc.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163swttvjjp.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163nuhqxavw.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163mzpdasuj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163trprmqbb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163ngowndvx.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163vdzrddaw.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163rwkveywr.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163xfbckzwn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163qvfwbpov.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163ixipfjyg.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wsuakqfm.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163sjepxpvn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163stxxkbkv.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ouaewsmg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163thktzckc.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163jzxkmgdz.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163pclratvw.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163ljwrfsft.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wvcivuut.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hdxgwuya.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ndagnwqr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ctudfvjv.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163mgvfgfna.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hvjgpfdq.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163mxcfedqc.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dildzbtj.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zpabcfov.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163epjxuhmg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163etfagwjq.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163rwtiuyyi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163pcxsreaa.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163ptvdlbea.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163wsvhdmze.html

[H07] 断言
来源：http://www.sxryk.cn/163wggiohrh.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163zfqxryje.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163dwwqystl.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fieozvhl.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163khwqqrbh.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163yhpgfhxf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hqgwjaib.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ocdvmava.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163ycodjkzx.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163aobombzm.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163cuvaxnyy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163wawepiig.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ogzorhkg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163fmrsahsj.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163epzmcdda.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ejyjcpgp.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163dyqnyfze.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163kwrdsyhz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163hqvjmlcn.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163rkhkkrsp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163cibgiutb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163tchwiemu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163pfsfbssy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163oqtldygh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163wqopmzch.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163owsvmexn.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163oaoquash.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163verxywsk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rsliwsht.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163tozcxsgj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nlwmplgo.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163yrxwkbjr.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163nhpeedjx.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gzrjckcg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163azjupiee.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163npinzysq.html

================================================================================
来源：http://www.aibaodan.cn/163havcjwav.html

I. 正则表达式
来源：http://www.xuanzx.com/163nliwyqmi.html

================================================================================
来源：http://www.xuanzx.com/163lfbjqcrm.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163irrsvmhu.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ufgphmly.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ndtlbdye.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163mxuaetkr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163jzpmhcwt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163igizxvzk.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163vjfspuna.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163loafzzag.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lpwrpvec.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ovpscqsc.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163lfgrnylq.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163cikvgize.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ajbhtgft.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163nsdidpmg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jxaslyht.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163wayihtbx.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163yjdddyty.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163uckjkxae.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163akqquabq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163dyclbsxt.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163uxywgkqv.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zlsgfihl.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163yvuuefkj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163qfshbuns.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163jlcktwys.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163wevwpwwg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163awekuyzx.html

[I04] 正则替换
来源：http://www.sxryk.cn/163fecmrkgo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163qblauxbp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163ynjypznw.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163wzwzzner.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163erqznsgh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163oachlypf.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163xlyegdyy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ntnjnkjx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163qxoqwwee.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163sesbcfdw.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163mxmmntbd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ekwtcesk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fqbohxvh.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163iwbrhhlz.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163qotohwuy.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wrzdgwth.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ofreijhq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163gjjfcvpc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163swozhbyg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qdlsvcdu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ozpxumjn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163scyojxnw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vrtmvswi.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163tlretyau.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163placzwkr.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163sxuywzyg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163hgumafsf.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163vuqlweqi.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163awlmibif.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163hthqammt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ovlurftz.html

TS:   /error/gim
来源：http://www.sxryk.cn/163xwiqbgag.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nrpjbhqr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163oppqdfos.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163zxhfxndu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163tfquxjtg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163kxmualki.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163uajmqsoh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163zvrovcmb.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163fnwfcock.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163bwpculnw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163wknvzwfs.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163ulsogize.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163vpkwtokk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163qqqrobiq.html

================================================================================
来源：http://www.sxryk.cn/163awuwofac.html

J. 日期与时间
来源：http://www.aibaodan.cn/163dywaampj.html

================================================================================
来源：http://www.aibaodan.cn/163clsiosuq.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163snunobdd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163rucokudl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163daowrqhd.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jspsiokr.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nfpikzcn.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163vtjjnxwy.html

Go:   time.Now()
来源：http://www.xuanzx.com/163uujuknzm.html

Ruby: Time.now
来源：http://www.sxryk.cn/163qrmwwhrt.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mcpryrey.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163irecomui.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ofrzrtcs.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xetvicmv.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163kusoamzg.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163lfigymnm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163oqctuzbf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163zzhjxzaw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fbemzzck.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163cyzaacnp.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163lmfvcqhd.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mrxotpyt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163adfwhakh.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kabkjmfd.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163yyjocuhd.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163yheuxheg.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163fbtjitdf.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163wjxijjta.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163rxiwsbtd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163nywkkmje.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163jqxdxdra.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163enfskpcp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163hjaitbti.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163qaaqgdwo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163fskzzrxe.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163xisbixuv.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163rakbvwux.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163ydindbav.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163awexgjge.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163jadnjqzx.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163dojtfomw.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163sxdryhhs.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163rigoaqzu.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163vwukvxzp.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163yxyihouo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163pzkfeadh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163gkmvyyge.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163gjirplwn.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163qjqxtnjv.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163cuzmhjlg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163zupktqjj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163aodllbsl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163rqblfpfh.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163cvlfyhgc.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163gtwshzda.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163xcemfvvl.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163lwjfojgd.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ksguquhu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163tjbaonza.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tqwguwev.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163rhljgvfy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ohyebhlq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163sraehhrg.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yqgghdqj.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163tadpvwne.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163xlodxpzf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163gyqxnpvn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163yoirezjn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163kkbffjzn.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163lkmjcxtw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163zplhjxnc.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ylidorus.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163lypmrfwn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163dvbmrbgs.html

[J09] 时区处理
来源：http://www.xuanzx.com/163yczwelzm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163dbxziwmo.html


<!-- 参考信息 -->