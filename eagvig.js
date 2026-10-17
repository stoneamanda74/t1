外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163gqifrmqk.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163bopjdyri.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ybrehelb.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163imzsgkui.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163cibsishl.html

[G15] 枚举
来源：http://www.xuanzx.com/163icagwiyl.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163hfmymmgx.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.xuanzx.com/163puczqlqu.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163evkzxfus.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163maeelhfj.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163pnojbgli.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163fmbtcseu.html

Ruby: Color = %i[red green].freeze
来源：http://www.sxryk.cn/163nmldlqkt.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163qivbqsob.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163wxqfoczl.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.sxryk.cn/163fphbqwjo.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163wtyaexxw.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dcfhsmri.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163cyndrxif.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.xuanzx.com/163tcysalun.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.aibaodan.cn/163mxfffgxw.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163daixpaft.html

C#:   // 用反射或 System.Text.Json
来源：http://www.sxryk.cn/163eoztbnms.html

================================================================================
来源：http://www.aibaodan.cn/163yhlrvtdv.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163moccgqgi.html

================================================================================
来源：http://www.xuanzx.com/163bwjayuoq.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163mffihfaz.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163upfuxusz.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163jwcpmiol.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163qhgewjbu.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163ajgjvaam.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163btwuwmrm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163nfeaazgi.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163lgasudjo.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163vdabmxbn.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163synwtakv.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.xuanzx.com/163bzieynxg.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163hatytsac.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wtnvefpv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163oytvwgjt.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dheposhk.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163adiupzii.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163xcfcmkas.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vxepuzql.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163pitfgqez.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163ayvlpntr.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163unutsgnz.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163etjqzuti.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163xkxghgat.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163wefktijc.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.aibaodan.cn/163gmjqyhvv.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163yjckcizw.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163yztrcfhh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163cnkwpmsh.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163bplcplup.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163tvvvjnsz.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163lwaxjqja.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xschqzic.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163jxqgpusw.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163nkrmysdt.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163nzvhufnn.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163uclmybdv.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163liwckzps.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163idyauwfu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163hafpswxp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163iflcfhfe.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163swmvevvf.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163paxnxqht.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163clgqdexz.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163cfnctsjv.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vonopmbo.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163xitjxdhj.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163dmliseym.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163mrvfzgcf.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163dpikksmh.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kvopdrxj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163eryponpg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163tabqvjau.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163hrswzbee.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163alttcnhe.html

[H07] 断言
来源：http://www.sxryk.cn/163xfgswzdo.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163dicscbzn.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163uqyykjiz.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tmxjcybs.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ojkesgqj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163sdxryqqk.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163fqloeftv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ogzgittw.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163dlrxkczj.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163gjqahapv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163ldxntpvq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163geqxowpw.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tgowhfzz.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163isvgmlun.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163ghkundyf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163cvcxvouj.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163hiaskgkm.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163uqahcgxw.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163zwfygrdq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163jxhkohcv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163yqmafdrq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163knacxspd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nurjggth.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163gbfsoluz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163nuvpkcdj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163bxhsbyww.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163cwvvjnpi.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dfwwwlgv.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163oyhimxpn.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163rubnlaon.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163gqvdhguf.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163siydtore.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163iusuzzga.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ilgzmfxy.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163rpuhgrqa.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163fqgmexuv.html

================================================================================
来源：http://www.aibaodan.cn/163egkzvxox.html

I. 正则表达式
来源：http://www.sxryk.cn/163nzuckeam.html

================================================================================
来源：http://www.aibaodan.cn/163qkvzfyqk.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163kvcciwlv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xegwxcgd.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ykssgizl.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163njcvrirw.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163yiiiwwkl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163ohfxvlld.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163oqzsblrt.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163uuyzhxdu.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163uiqvwuza.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163zjyhfvpu.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163wrhdmoyf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163hnmtbkjt.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163gtvqjnaj.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163psaikuhb.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163rixrkxdq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163dcnibdlw.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163hiroqmzh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163qlptyvow.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ksjjvotu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163cwnklrri.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163emwfurbu.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163marjqurd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163nwjaywmp.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163jdmmmxzm.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163wmrzoabw.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163cqzsnwwo.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163ofphhnuz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163mvyfzfvm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163xmieuwqu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gyarrgfz.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163eumiwexe.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163jfzznlpd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163jizawatw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163ftohwpje.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163bkxxqvvn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163hkrneeft.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163efjowfdj.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163arfzwcfo.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163yxlnxuws.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163lfskjkpg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163owiriumn.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ctknwkth.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163afkgdtgy.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163pxjcxxrb.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163rxjdfiyj.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163tmeqleuq.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163drseinwg.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163wpolgppp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163vmktjlbs.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163shjxrwlc.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163nbkxzwem.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ezptgvfn.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163mlvhfsqj.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163kospeakg.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163nvmtmzcf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163cpbvdccv.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163kvsbrgnt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163gcsghcbt.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ofmmvfit.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163gbvdemyn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163jxzwrhqn.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163tgwbndut.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163cmbauhka.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zuhmhtuy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ajlmmaaz.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hbjjcokx.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163cahmhjkl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163rkliphvd.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163olddtpct.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163szjruwcc.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163bniozikr.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163clvefata.html

================================================================================
来源：http://www.aibaodan.cn/163urkbzrsy.html

J. 日期与时间
来源：http://www.xuanzx.com/163myxivkqh.html

================================================================================
来源：http://www.aibaodan.cn/163brzjgzxy.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163ksiidoki.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163nywkkezm.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163xyrlgcrv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sspvtbbt.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163zilcoyji.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163alvfllgj.html

Go:   time.Now()
来源：http://www.sxryk.cn/163plsqkqit.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163gqhtynyd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163tismwftn.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163npgxnhma.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163mdgqtnni.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ioexuumz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163nkhisphb.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163cjwshyrg.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163tnklsaru.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163fswkvtpb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163hglenbok.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163lyezqucd.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163kwhuepfr.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163qtwptlwb.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163xklradrn.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163qyfvfpae.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163qloeptze.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zcydjnlo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163vpwnlwyq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kyqwwywr.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163sbhxtkdu.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163hxijnema.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163whupugzg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163rxcozspp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163einfhlhg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163yncabayt.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163dcebfhrr.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163eumtbnpk.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163rchmmjzv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163svbgwsre.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163rnbkzqbd.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163shdmdmav.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lemriype.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163nwicklhv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163dvbqyalm.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163mdqvhoib.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163aaivnwyp.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163btduqqnh.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163irdsomnm.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163werekiya.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163fcpntvuu.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163fmhcbobg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163nmwfhnpb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163rgsfxpha.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163hziafbax.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163aixfieyx.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163qggkphjj.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163gybvusil.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163kgvnrzot.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ijluofwe.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163ehquioeo.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163clrvevph.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aizkcecy.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163xxlspkbl.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163pbskhkxk.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163csnnwtjp.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163bicbiicr.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163blearytn.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163ybbtagpv.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163xejmvlvn.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163gkmmwpmv.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163gxatsmay.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163uiojembk.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qshgoaes.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ueegtjju.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163hprqceon.html

[J09] 时区处理
来源：http://www.sxryk.cn/163tumjgpde.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163ossxbjun.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163qttvaqxt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163yyypfcyx.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163qppewhpy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163wrjduywp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ruyjiifp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163irrqgppj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163cuzbyisq.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163mjoylybt.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163yzjjmxqq.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163stmfpvox.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163cyodstzz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163oonmddmh.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163shcseknp.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163bpfbbdju.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163qdjpycde.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163reectnog.html

================================================================================
来源：http://www.xuanzx.com/163ohqcevyf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mohxkopy.html

================================================================================
来源：http://www.xuanzx.com/163pddrglpn.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163pzgwkrru.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163xqdzxayg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163szxptjnh.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tjevpzzd.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163omdjijbg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163dlgboklb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163mhrkztmw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163qkecsqeh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163fslsdcrm.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163wiexbyml.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163dqumsxma.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163nuvrkpwq.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163gvjnplbe.html


<!-- 参考信息 -->