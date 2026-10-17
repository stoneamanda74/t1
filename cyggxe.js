外链999!wailian999！

Ruby: attr_accessor :name
来源：http://www.xuanzx.com/163igkxhmqt.html

C#:   public string Name { get; set; }
来源：http://www.xuanzx.com/163xdrggodb.html

[G12] 对象转字符串
来源：http://www.aibaodan.cn/163unitkziu.html

Py:   def __str__(self): return self.name
来源：http://www.xuanzx.com/163ihugczth.html

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.sxryk.cn/163xbomxuci.html

JS:   toString() { return this.name; }
来源：http://www.xuanzx.com/163oendyprd.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163nlruajlf.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ghxfxluq.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.aibaodan.cn/163gelscytb.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163oqexhlda.html

C#:   public override string ToString() => Name;
来源：http://www.sxryk.cn/163govokuoe.html

[G13] 判断对象类型
来源：http://www.aibaodan.cn/163cfbhyvtw.html

Py:   isinstance(u, User)
来源：http://www.sxryk.cn/163pjqnwlcp.html

PHP:  $u instanceof User
来源：http://www.aibaodan.cn/163avwmpuhc.html

JS:   u instanceof User
来源：http://www.sxryk.cn/163nyrqenvc.html

TS:   u instanceof User
来源：http://www.sxryk.cn/163oznjeein.html

Java: u instanceof User
来源：http://www.sxryk.cn/163itjlxkfz.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.aibaodan.cn/163vllmhlmp.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163huqomicw.html

C#:   u is User
来源：http://www.xuanzx.com/163jpuudrgg.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163cbtvtlac.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.xuanzx.com/163mjrvjgnf.html

PHP:  // 用 readonly 属性模拟
来源：http://www.aibaodan.cn/163upngsugl.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.sxryk.cn/163mwofrdzs.html

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163pdgmwnnd.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163byiesiws.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163titcpdqn.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163wcknkssn.html

C#:   record User(string Name, int Age);
来源：http://www.aibaodan.cn/163tzhbfllm.html

[G15] 枚举
来源：http://www.xuanzx.com/163jmprpfqb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.xuanzx.com/163bqsqwcmd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bccjcvdf.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163tbzdvnzk.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163bwrqooxn.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163gbsfjipk.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163vhjiuqul.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163bifogoyn.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163twablkzo.html

[G16] 对象转数组 / 字典
来源：http://www.aibaodan.cn/163uizfchdj.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163rpajlfwo.html

PHP:  get_object_vars($obj);
来源：http://www.sxryk.cn/163wbhovbro.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163zizybiyc.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163ulyoyxjg.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163yhfvirkl.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163hpufgdaf.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163civdnpam.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163zbgtsyru.html

================================================================================
来源：http://www.xuanzx.com/163wrjefcwh.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163qwgyhvir.html

================================================================================
来源：http://www.xuanzx.com/163rbftomxu.html

[H01] try / catch 基础
来源：http://www.xuanzx.com/163llpjcdyh.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163wylnpmqe.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163ehdzrawd.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163zwphvtyg.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163wkcrwhls.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163grtnnuym.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163dhqwordw.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163wepplavt.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163pfteckyk.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163aousaowl.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163hartkhci.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fvnscmhj.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163zvsilkmv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ugweyqax.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ukibqxiw.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163kvefibfe.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163uocankhr.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163hvsgccna.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163zmlhscls.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163ysayyyxg.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163hqxqyfod.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163czhvttmh.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163pttrtbzv.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163nbjwqfdn.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163nycgazkb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163xreezxvc.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ifwimirj.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163viobhijs.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ptihuria.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163ehezddav.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163jtgmqvva.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163avniwnft.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163buznjaxl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163nbvasoua.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nihnuuzj.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163dxwxsquk.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ncpiljkn.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163uacibkwe.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163wbdjqasf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163bessdiui.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163puitnzbz.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163vivprbgy.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163jodeegxr.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163ryyffigm.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163mushygks.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163cvosucxl.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163mhpddour.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163lickwxhg.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163uqvanclb.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163pdkhniwo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163hdoywtnf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163anxhthwj.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163lyhnzgds.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163xcxeajar.html

[H07] 断言
来源：http://www.aibaodan.cn/163amcctivh.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163uvkggymi.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ilpiibqr.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kxiqdxok.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ofilbgzb.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163nmvzkrcy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163auttcbhk.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163jloxcnes.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163qkiuuaeq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163mzaqqpwc.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163vdgoodcd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163oupnwukt.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163mrsuohzg.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wxobjxgu.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163zfsaafao.html

Go:   err.Error()
来源：http://www.xuanzx.com/163jzbfjnhk.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163pvymoucy.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163wpjbrzrw.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163cjhbwpmm.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163iziowuts.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163nqxkwalv.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163otfbovul.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163rwmpvdtj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163wjxkubhr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163vcbzdesf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163hqxdsheo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163vfqxxiht.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163nyxqhhpx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163gjensklh.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163dwmunwij.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zcbfctuw.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163lbgmtnrc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163nzlukxro.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163gedzrrhz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163aavdtgar.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tmxjrnjk.html

================================================================================
来源：http://www.xuanzx.com/163dderhszg.html

I. 正则表达式
来源：http://www.xuanzx.com/163ruhxqdff.html

================================================================================
来源：http://www.aibaodan.cn/163yhrzwhzv.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163gmwxhgic.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163kjdvotog.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ilpswwqt.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163qdweyazi.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163zhymsqfo.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163rccafybe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163abolivkw.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163kmuuzpps.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163qgnpjrgl.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163joxloynl.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163ubwajela.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vpdsopem.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163bxogklne.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163lpidxokh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163gknszbtr.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163eeegiwgh.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163ocpkctba.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163hwuvlhwq.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163sqzboitr.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ivtusclq.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163myfthwag.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163zmatpsis.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163bdnrxlsf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163hboaxrel.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163xnlrvfdc.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163lronscwm.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ofqbrwvn.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163byebvumz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163htfxexdp.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163petzkqud.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163uxgcislx.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163fsafeirc.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ccowkuld.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163npvvnumu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163inqielsy.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163zmjgivlm.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pyenvhyx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163aqatgtkd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163iblbfolc.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fwvfffdr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sljyguuk.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163epsjovmq.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163miwmpsfo.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163geuegxvy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163jmkkfteb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ryovryrp.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163kexloftl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xldjxjtm.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163onxvsarm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ojqhcewr.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163bnffvjer.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ydsgwsus.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163uazaowca.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jmihzzny.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163bbvpwjvu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jgmkeswb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163trqzxfvi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163pfrvnhbh.html

TS:   /error/gim
来源：http://www.sxryk.cn/163dmswtdvq.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163bsniogjo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163bavepolm.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163viefuzpg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163rtbbybfq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163swbqauek.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ykmhigra.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163ihnlvbmz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163vprygien.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kbcsslsd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163zrekikxx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163jcvmkgpq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163wzniekfv.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163grudfgbn.html

================================================================================
来源：http://www.sxryk.cn/163ipaqtnve.html

J. 日期与时间
来源：http://www.aibaodan.cn/163fiecwwgh.html

================================================================================
来源：http://www.aibaodan.cn/163sxyamoce.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163pyhpqqrd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163pdwlvyco.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163lfmgkeft.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163iuounrpj.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ogkihmmb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163pewqinkh.html

Go:   time.Now()
来源：http://www.sxryk.cn/163xemusfte.html

Ruby: Time.now
来源：http://www.sxryk.cn/163usoekxhw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163ozjanwoz.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163gxwqompg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163qsrjsuur.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jfqqzcpl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163upgbsqme.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mppvmgoc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163qpnneyih.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163xcuxgnmm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163etcakple.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163destdqxl.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163aqoskuid.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163pnhpsalg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xezefoyt.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163xzbowdnh.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163iqetwyat.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163bdgnrzmj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163tcgarvtn.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163bcnprcok.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163wpkvojhp.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163kuldtrhb.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163xvqahbbs.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fphlvtyr.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163xfscoeoe.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163mkwlixgb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163efruucdl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163jltaztqq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163vaekybjl.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163uvftnofk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ooshmenu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163sybykpza.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163hrpehhwf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163htngaxwb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163zhxiipbe.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163idzudysf.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163pakszjtp.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163rphndlcc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163powesmud.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nvlglqur.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163nqyztizy.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163eladajob.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163ahjbucbj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rvamyrjc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163fnmnfynm.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163yugihsrl.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163scwbamhp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163fnjznnzt.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163eyjsspda.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ghdvmddg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fkwwuueg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ajamjdfz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163yynyrmva.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163qvaqprpx.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163mzdytowm.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ybdcsxqk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tgbutdal.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163vuapsinx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163bhiqplvh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163eszcgyyr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163nnkngfyj.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163wyasnsvd.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163iawjpeiq.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163rycfebqb.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163miwbxxay.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ilkiqzqr.html

[J09] 时区处理
来源：http://www.sxryk.cn/163relarilc.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vtblhwxm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163icrifqbv.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ividjxtd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163xmtfccla.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163hvojcgxh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163syemdeok.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hzdajqua.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163zhfnmozh.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163tijdceqd.html


<!-- 参考信息 -->