外链999!wailian999！

PHP:  public function __toString(): string { return $this->name; }
来源：http://www.aibaodan.cn/163btyrrhnz.html

JS:   toString() { return this.name; }
来源：http://www.aibaodan.cn/163jsuacqbd.html

TS:   toString(): string { return this.name; }
来源：http://www.xuanzx.com/163epfqlgot.html

Java: @Override public String toString() { return name; }
来源：http://www.sxryk.cn/163ncncrcce.html

Go:   func (u User) String() string { return u.Name }
来源：http://www.xuanzx.com/163klnzyiye.html

Ruby: def to_s; @name; end
来源：http://www.xuanzx.com/163xxxkrszg.html

C#:   public override string ToString() => Name;
来源：http://www.xuanzx.com/163cvnrknhw.html

[G13] 判断对象类型
来源：http://www.sxryk.cn/163xqtimqfa.html

Py:   isinstance(u, User)
来源：http://www.xuanzx.com/163mvhygkxm.html

PHP:  $u instanceof User
来源：http://www.xuanzx.com/163vnfjioso.html

JS:   u instanceof User
来源：http://www.xuanzx.com/163gehjwrbn.html

TS:   u instanceof User
来源：http://www.xuanzx.com/163usxcknhu.html

Java: u instanceof User
来源：http://www.sxryk.cn/163lyetkxka.html

Go:   u, ok := v.(User)            // 类型断言
来源：http://www.xuanzx.com/163cucjdmzy.html

Ruby: u.is_a?(User)
来源：http://www.xuanzx.com/163anlabyun.html

C#:   u is User
来源：http://www.sxryk.cn/163tfrsjaap.html

[G14] 数据类 / record
来源：http://www.aibaodan.cn/163kayzbohq.html

Py:   @dataclass⏎class User: name: str; age: int
来源：http://www.aibaodan.cn/163geidmlre.html

PHP:  // 用 readonly 属性模拟
来源：http://www.sxryk.cn/163nvzznkwp.html

JS:   // 无内置：普通类或对象字面量
来源：http://www.xuanzx.com/163lbcghirp.html

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163ihqmsvfi.html

Java: record User(String name, int age) {}
来源：http://www.aibaodan.cn/163grpsvsqh.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163pzxxawzg.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.sxryk.cn/163aspbgtha.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163ywkdncmr.html

[G15] 枚举
来源：http://www.aibaodan.cn/163apcjhewk.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.aibaodan.cn/163hmrxekqj.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163rxeakgah.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.xuanzx.com/163aonbffzc.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zjetuurk.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163uepyttac.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.xuanzx.com/163hmpcmmfq.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163mknwghme.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.sxryk.cn/163tmupverx.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163ohspxmmp.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163tdcyewfu.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163eqgwrwmc.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163aduqfwzl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vgckjxwf.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163vxamvfic.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163juhdulha.html

Ruby: obj.instance_variables
来源：http://www.sxryk.cn/163ebfabxbz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ckuxsknx.html

================================================================================
来源：http://www.aibaodan.cn/163ijsnqotm.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163lgvhfxpk.html

================================================================================
来源：http://www.sxryk.cn/163qulscezf.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163nkfxrzgj.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163mvpmahih.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163ejbovjru.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163qwntylpe.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163myymyizc.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163edhllvqg.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163ssqdrwrm.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163kjmwzlaq.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.sxryk.cn/163kbfcixxd.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163tekmexhy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163hsbmdptx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163zipthgkw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163kkjfgmst.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163cgnzbneg.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ciljfuel.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163wnigtoha.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fbeqmdwg.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163whkslaac.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163txnkgvqs.html

Py:   raise ValueError("错误信息")
来源：http://www.sxryk.cn/163zmjuwzxj.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163eswnysie.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tagayxtu.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163dvvijyyy.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163zmzuelrd.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163rlcfkymv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wimvfwym.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.xuanzx.com/163oqftibnr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163wvmcviii.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163drhcjhlm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163ykuwrozo.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163hbpivckz.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163zmrdnrjd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163zsjqqufq.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163kbqmlins.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163apdbzjbe.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163zkhngxmv.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163nwvnmvsg.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163qbvkfxrt.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163wjxwzzbz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163vmowzzhu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163fazajggr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163ygnvnvsg.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163sihtunat.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163feqkafmj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163piuafjsn.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zaumuulw.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163cbsaxdzb.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163ioalypzf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kggtaqhc.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163yjiumcif.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163urqhvlty.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163djxdqdad.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163iuaraydh.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163dzuoftmt.html

[H07] 断言
来源：http://www.aibaodan.cn/163tofgnspl.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163mjsvndui.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163duepgsnw.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163lglfksal.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gthjvnvu.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163qhxklwrs.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163svligwgb.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163jlaqgsrq.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zklknasp.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163erzuszif.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163tkwpahgo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163oiuznjbi.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163etzhqfwh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163wfxyvshp.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163exxqwstt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163iqxmsrwy.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163fhyxnhao.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163etyonbxf.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163ycylqnvr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163gffmrkoy.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163puyqjewl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163dqdxodjo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163psotnngj.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163jirngnmi.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163pasbrssg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163ojspnvki.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163ueqfneen.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yexhkzac.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163btldzdxa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163caaculin.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ycltobyy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mofnzvez.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163hsaszrkn.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163ratbbqzz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163gvzxcvnn.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163govleqof.html

================================================================================
来源：http://www.sxryk.cn/163dyrpjtas.html

I. 正则表达式
来源：http://www.sxryk.cn/163cuqhnphv.html

================================================================================
来源：http://www.sxryk.cn/163riawbpfs.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163kuxmxawp.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163vunytbmo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rlmkwrnf.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163illjlyvw.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kxubxqyd.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163aivughyj.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163pejggfkj.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163anzkkzuc.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163xzjshxcc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163eiazttlq.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163druytzae.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ceknbube.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163rbsazwok.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163ceqljktc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163liauborg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163qwlgtncf.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163hxloarcl.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163mapofnlt.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163kkkdmies.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163voyauvfj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163qycwvkvt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ylboqbtu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163rnraaxxl.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163rfkpnaui.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rqzohjdf.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163obrncbcx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lqsneqhs.html

[I04] 正则替换
来源：http://www.xuanzx.com/163qedmfwdp.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163lfomknwk.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163btlewhae.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rabuefby.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mwweffzg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163aunqiqow.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163iihunooc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163zfapowwb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163kqqlmyrq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163wnrcstxg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163lxxocvlx.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163rwpcitbx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ggkkybgc.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163owhkjdlo.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163uomfldoh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163wozdhiyd.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zsfoudvk.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163jugtqaqw.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163zpuuxtvy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163eqzxtzea.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163kqreqlyf.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163olojggrw.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163qwkarbyg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163yhhlovjk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ycuipqzd.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163fpyxqzuk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163tnnnoatx.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163dsdytpam.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ppaidxhv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163qcqnslkb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163sfphxvrn.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163djbsnyov.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163cvkronya.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163orijfasw.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163nvunoysb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163lnnfyaoj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163statewat.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163ooxjxhvl.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163wuzzwfdi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163blvsimrd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163edxfzmiz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163aqmibpnu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163fyggchdm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163fpdcxtcp.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163mmsvpcxo.html

================================================================================
来源：http://www.aibaodan.cn/163ybszhyoq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163wezudpng.html

================================================================================
来源：http://www.aibaodan.cn/163jclkxeqc.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163umacdixd.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163snvzuvdt.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163iaobddyy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qjkuhcia.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kdyiqzzy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163jrwtvnla.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163whetppic.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163jzikthih.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163guamjsdt.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ccsyougt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163kcnlzurp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163rxpsahyk.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163tcbjhnoh.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163otaozhms.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wfqidbsy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vfzzbrmo.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lgvjtbzh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163wxytiaqz.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163xxqqsfgt.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fgihidjq.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163gxglppqp.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163xhmubrzg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ipicyqmf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163apvccsku.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163eggvnctp.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jhxrmuiz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163cykrfaev.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163kmytimog.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163oofquzfq.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163vaihvmdk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pltdxwif.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163vbfozrfl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163cpfhcfqn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163affmgvcq.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zqmjlkwx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163lnqpetfv.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163vozxmtoc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wmyvxsew.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ugxqsocb.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163gewwywya.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163riugqfvj.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163uqkozgjl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163fsbenlhs.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163odfyhnaa.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163uhbqiedt.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163hcvxmdkd.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163fddmkdee.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163btldinph.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163tctzzqvw.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163awjvvbut.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163veajdytc.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163jfdinbsq.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163rwvhzyup.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163duqswwnf.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163mdlfplpo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163qyvrznwk.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163xbdymkko.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163slwnftuj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dkixntjb.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163tocaumfc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163zgxpunae.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163eumhloai.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mbsvsgji.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163rqnziuwe.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163envgbwrz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xoulglef.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163uquemeya.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163yjcibexi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xplqtpvk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163oelygpmu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163uivpiwax.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ptaehswo.html

[J09] 时区处理
来源：http://www.sxryk.cn/163pkctvnxm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163etpcanbj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tzkjypwi.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163cuabepqd.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163ejsjikmr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163infltbyp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163znrfhrvj.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163kmgvdkja.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163sxsxknsh.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wfpbzzrd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163mapwtsql.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163iinuazxe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163qtrviqak.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163nuwidszm.html


<!-- 参考信息 -->