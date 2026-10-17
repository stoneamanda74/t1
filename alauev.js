外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.xuanzx.com/163giatnciu.html

Java: record User(String name, int age) {}
来源：http://www.xuanzx.com/163jwcbvvlf.html

Go:   type User struct { Name string; Age int }
来源：http://www.sxryk.cn/163eyjosypq.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.xuanzx.com/163oxiyaqmu.html

C#:   record User(string Name, int Age);
来源：http://www.sxryk.cn/163utlmvgjl.html

[G15] 枚举
来源：http://www.xuanzx.com/163ibbendqh.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163ajidsifd.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.aibaodan.cn/163unmfspal.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163jpzkidjy.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163zpgywvvx.html

Java: enum Color { RED, GREEN }
来源：http://www.aibaodan.cn/163whyzzlwq.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163wjyqqjci.html

Ruby: Color = %i[red green].freeze
来源：http://www.xuanzx.com/163jphnbouh.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.xuanzx.com/163qpxfwgdc.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163nmfjqkfs.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163chymueem.html

PHP:  get_object_vars($obj);
来源：http://www.aibaodan.cn/163vuwwqivs.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163gmytoler.html

TS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163kirudilq.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.aibaodan.cn/163rqftaqqj.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163mrjnxykg.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163ozvdccdz.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163kzsujvzf.html

================================================================================
来源：http://www.xuanzx.com/163gyyupqli.html

H. 异常与错误处理
来源：http://www.aibaodan.cn/163opneqfpn.html

================================================================================
来源：http://www.sxryk.cn/163sswaymua.html

[H01] try / catch 基础
来源：http://www.aibaodan.cn/163aklpfwxy.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.aibaodan.cn/163uwtwehoq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163sqvdtxnw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163hgtnctjl.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163drqvoeut.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163ggsoywsw.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163alfvbdur.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163qgssillr.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163fywldlkh.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163infgywtm.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163ghhpkydo.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163widtdhnp.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163rcppcklg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163olejgoaf.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163duhxxwud.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163mdfznbcs.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163olhvodmn.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.aibaodan.cn/163vhaspxzg.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163wogngwbs.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163hphuonbb.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163xtlfpehk.html

JS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163uvlkboww.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163vqwengsg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163tqoafqiy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163cyagermh.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163ysvouqkr.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163suihkmzt.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163sxkklgry.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163khnorzdc.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163snxbrhks.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163kcdvcuyl.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163vngxjyef.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163legufymu.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163hvzvfykd.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163syhacbtg.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163vplmhmvd.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163pupfnjbo.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163yznobnep.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163rhcrzdum.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163trqnuzmh.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163eybabodt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163xlrvbkny.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163itouyyvh.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163wzdjxuzw.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163ryuxegif.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163qndfdbbr.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163vnvygzth.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ibhuzvmt.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163djlpwzps.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163estewipc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163zhgvqrxq.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163vmdwosph.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vqcurafx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163sirzvmup.html

[H07] 断言
来源：http://www.sxryk.cn/163ldotszdq.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163rrrbxnfc.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163affkfhpl.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163scmwcamp.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163kzwazenf.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163siomgito.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163xqrbdjvf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163talnybun.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163qlyoctgd.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163zlcqfdgv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163fsftwaah.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163druxfpel.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163nijzihun.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ivgcgorh.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kgahebjt.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wtabwvzf.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163hrqjqcoe.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163pcbsgqea.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163sgmwmdue.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ryqtvwho.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163sjsiurtl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163babdckcq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163sxcbqanq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163usmfiedb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jpfcenzb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163dojjggqe.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163ocuqgvus.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163dzxcwvap.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163srbbukrj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163pfbrptpa.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163hwommpbe.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zbaynnhm.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163mhngwjdw.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163dxmsmaqt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163pbyqiqjj.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163bkzzlker.html

================================================================================
来源：http://www.xuanzx.com/163wxjtaosi.html

I. 正则表达式
来源：http://www.xuanzx.com/163esaicobk.html

================================================================================
来源：http://www.aibaodan.cn/163dxfwipyq.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ozejajyi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163ubvzucwb.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163qwhjxgze.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lczsvzsk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163vqujngfb.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163acmzqnle.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163wiunzpkh.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163nboaoltj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163mikautkg.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163mtrkpjyw.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163cktohdwd.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163yxujelht.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163czaxnipv.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163klomixhw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163gpwpiaou.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163hjbalhad.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163yqgjmcwd.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163mfdofhtr.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163yindjotq.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163olebozbf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163prbcojbq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163wlnzrsrx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163tyxvlugj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163uwkqwddt.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163yuuojbum.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163xfledavd.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163zkoghviu.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163eyjwdjkl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163zutstffv.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163oirogegk.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163niyufevt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163rcttbsde.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163plnlausg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163deioaowr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163qqkmuuoj.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lmwvlftt.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163dastlgfc.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163edxuuruq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163amdvbjht.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dshccbxr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ijiiqymb.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jdheoyve.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163luslvgwc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163aerbqnbe.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163onnynboq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163fgnwqodx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ppxntgsq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163mtmdqats.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163cfndzidn.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ignxwjyq.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163ynlvlaix.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163pxcgjuao.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163yaxlbewa.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163xzvspofs.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163rrkwjorh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163gaxobclu.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163jxxqgmky.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163stvvevom.html

TS:   /error/gim
来源：http://www.xuanzx.com/163hmxqjfev.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163rzwwhgmu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163vwrkgyjb.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163towstcne.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163nmaltbah.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163gjhaqjbb.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163xuujjhax.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163dgqrkfzy.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163kifmnsjk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ilefjdbu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163uoqlkkhj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163wtskhayy.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163hloerjcn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163wecwbhgr.html

================================================================================
来源：http://www.sxryk.cn/163powdomch.html

J. 日期与时间
来源：http://www.sxryk.cn/163ouwspcvu.html

================================================================================
来源：http://www.sxryk.cn/163kytadhlf.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163yadjudov.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163bufgkehr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163hiohtoel.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163pqlwijdp.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pygpkdsq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163sdstzcot.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163vjhuredh.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rxlkekci.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163txazbjts.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163clissatt.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163fpcppukv.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163kilizpkl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163wbbojbgf.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163rsojcqip.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163funczfmt.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163rkbzorqv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163otfjukkh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163xrbvfmkr.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163osvfhbvz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163jidfqikk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163epyyscdt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163djruvcsk.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163nugyefzt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dwnapbtj.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163sntsjivl.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163nfgxljff.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163txvqygsr.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zafqainw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163ycmtedxl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ememhibg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163vvqushmw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163kncezdji.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ajhdwkpd.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163ncrflxad.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163wexfyfvc.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rfdzsupa.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163kfdzlgbq.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ctpmyorg.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163hpynigvh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163kxjgsyfj.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wcxvvzrf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163aahxjjri.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163gsacwykj.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163dsrhvozo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163pzjkoieq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163buivapgt.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163mrorsyuf.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163avtxqyjk.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163lvcsynzp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163jkekqjvs.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163mkejxadd.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163kdswighd.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163wdewlvhn.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163vlflqjzs.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163vzbubwbt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tlpjxsmh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163umpxzfla.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ngophxlg.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163takbryzm.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163bewnsieg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163vqawbdda.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163omrskroc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yenhglyx.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163uylnqorq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pyrgwpne.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163qwhjxytb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163jxjkxuem.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163rolmcjqo.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163xlzgkoad.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163ibfjbscl.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163xiwtbbka.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163kbixgoya.html

[J09] 时区处理
来源：http://www.sxryk.cn/163bkzvqgxw.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163onaytqkl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163hvnqnvqz.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163bzvafuaf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163swsudwyx.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ewqsdraw.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163xspyjyty.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163qlzkaicu.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163kizfwzvv.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ogibwzbe.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163pmyzthzr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gccxgcdg.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163mkvziejq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163lnxkoqfs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163rsidclkx.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163czcjudce.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163xmejrbps.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163tkddzbvq.html

================================================================================
来源：http://www.sxryk.cn/163uohqtwgk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163egprrjxh.html

================================================================================
来源：http://www.xuanzx.com/163dfvgzepj.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163mhbwlqhv.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163ajihtcuw.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163enjnwkbc.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ebybxouh.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qilsfjok.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163tnhougta.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163cnxsjivi.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163iycxsjfh.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163urgpuixu.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163rqclemjz.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163juslgosm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163betuacln.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163yhgwjuuv.html


<!-- 参考信息 -->