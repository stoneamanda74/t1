外链999!wailian999！

TS:   type User = { name: string; age: number };
来源：http://www.sxryk.cn/163sswehkvi.html

Java: record User(String name, int age) {}
来源：http://www.sxryk.cn/163jldcxsyi.html

Go:   type User struct { Name string; Age int }
来源：http://www.aibaodan.cn/163ysgeahsr.html

Ruby: User = Struct.new(:name, :age)   # 或 Ruby 3.2+ 的 Data.define
来源：http://www.aibaodan.cn/163zelrdtoc.html

C#:   record User(string Name, int Age);
来源：http://www.xuanzx.com/163bapsjaui.html

[G15] 枚举
来源：http://www.sxryk.cn/163oecrwnkb.html

Py:   from enum import Enum;  class Color(Enum): RED = 1
来源：http://www.sxryk.cn/163axxorrne.html

PHP:  enum Color: string { case Red = "red"; }
来源：http://www.sxryk.cn/163bcpladig.html

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.sxryk.cn/163maykyrlj.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163ddbqkpkl.html

Java: enum Color { RED, GREEN }
来源：http://www.sxryk.cn/163lxdtunes.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.sxryk.cn/163orwwfibs.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163poxefxqr.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163lhjuhjgk.html

[G16] 对象转数组 / 字典
来源：http://www.xuanzx.com/163pnkafiuk.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.aibaodan.cn/163hcjkxtby.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163mqyfloqo.html

JS:   Object.entries(obj)
来源：http://www.aibaodan.cn/163dspdxclm.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163kubfkslz.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163zjhxlgdw.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163lmsuobcp.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163vujkkcqg.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ikekmgse.html

================================================================================
来源：http://www.xuanzx.com/163gqwbqcth.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163trpigufp.html

================================================================================
来源：http://www.sxryk.cn/163pknffjus.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163dwjfhrdq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163sqsojfaq.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163cbkjxhcw.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.aibaodan.cn/163lsabktck.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163vxvxvezh.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.sxryk.cn/163pivqngky.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163slzmaspx.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163uynipsvh.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163myxudtdg.html

[H02] finally / ensure 收尾
来源：http://www.aibaodan.cn/163omglcxvy.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163zrtvqhtx.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163pihhqbex.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163abvxhlpb.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163yplokbef.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163lxkagxxl.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163uwytqfbu.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163rgjjxmjl.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163ltatdbko.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163ntaktwff.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fvegiozi.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163nbjsysuo.html

JS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163ebkuqhci.html

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163asihypqr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163imffjsgy.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163rikwgowx.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163sulmifqn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163camauhcq.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163pzhubuaa.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163btbgspea.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163rojpogwv.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ovzxezyr.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163adkdplqv.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163vkuyjjve.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163nplnuord.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163qprllcwx.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163pwvfrpba.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163cxcciufr.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163rkguhdyl.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163vgwupvei.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163hyqwtkyi.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163alofdhvy.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163nxzkhvaa.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163dtngftho.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163ndeoyrwu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163aftmvefu.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163xlmjnmdy.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gbqscxze.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163mcdwkinc.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163hesdyjlj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163naywniby.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wwcdmwsg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163cnnurxmk.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163musqskvx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163cglzfrvo.html

[H07] 断言
来源：http://www.aibaodan.cn/163ffjnmdsl.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163hpejhpeo.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163xoekrarg.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163cqbosyax.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ajngvtyt.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163zftrywwf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163zmaywjqe.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ftabwpkr.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163rtjguzyq.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163krsgnujk.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163yaicgzom.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163dyzjjemi.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163whgkmvvu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163byqrsxod.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163tdnimlww.html

Go:   err.Error()
来源：http://www.xuanzx.com/163cajdtrhk.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163zmzvpgry.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163gfydvxnv.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163qnbxctok.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163lkncdsmc.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ykntjage.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163oxfokuhq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163apbnickf.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163mxihzdkb.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163zynishax.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ntcbsolb.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163leuoxqep.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163wqdodkju.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163hpmhomes.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163gypnxycw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ftsuplci.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163fvfmyovo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163gfezbvwd.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163jxqhodcb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163uosrzpjg.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163tummcwya.html

================================================================================
来源：http://www.xuanzx.com/163emapourz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163zxxrdqnu.html

================================================================================
来源：http://www.sxryk.cn/163igvbqvdo.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163lqiyxmjz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163dyiurrab.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163brjyqtoy.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163jbtmnbsm.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163lfokkhei.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gwbsreon.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163hotjmpwe.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163ipusoetq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163losenoyj.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163kdhcetcd.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163chqtepxp.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163bxnwbhhp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163vigglwcx.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163xrlddglo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jfxldpxe.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163knncycuv.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163arhxaxey.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163uslnjvaz.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163wkosyuli.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163ftmfzfme.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163vvxyyjhn.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163rumyrnlu.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nxldjpnz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163otguiogr.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163qjfsmjme.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ssnhytse.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163insskygq.html

[I04] 正则替换
来源：http://www.sxryk.cn/163exsihjku.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163szhmyvlq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163xokhowcn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wheqwury.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163fmnlpbhp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163amimapdg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163fggbrkpv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163inzvoztx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163qzmrrpvu.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163uzmwyiic.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163wyrbmnox.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163symhtvsx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hvbgemrn.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wkeivuze.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163bnvzatna.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163sltqcfaf.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163awydceye.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163jawcjmvi.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163jtansmll.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163lahvcaea.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163pdsjzakl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163fdajmjqt.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163sklemebk.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ysuguddo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163itviaqkl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163esjohdam.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163ewzgvntn.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163okasavew.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nemzsfjd.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163dfhtudvv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163spvfocne.html

TS:   /error/gim
来源：http://www.sxryk.cn/163whhmaszw.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163wugopvwb.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163yagtbxbb.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wkbpzwbz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163bjgiotlw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163etulvakz.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163djoyfnol.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163wktnudxo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ytdoivvo.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163kbbzmuvn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163wtsxfksu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163ixdgovex.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163isvjekxn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163fzlyxuka.html

================================================================================
来源：http://www.aibaodan.cn/163nxlbpceb.html

J. 日期与时间
来源：http://www.sxryk.cn/163cwdyjqzv.html

================================================================================
来源：http://www.aibaodan.cn/163fkslfdle.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163rewjcmrn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163eaioplne.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163renkwcky.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163rwcwdytt.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163eeopgdxc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163nzahupjp.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163jislnwld.html

Ruby: Time.now
来源：http://www.xuanzx.com/163mwztcnjb.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163juzmtbtg.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163jaswvyvr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163pksfatht.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163yjvlzxbe.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163zdcdrltu.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163aauwgrkw.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163cweshjwz.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163ojhwhqmc.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yynooxjs.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163tnvfpzek.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163bmvsixvp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163rbmxsisj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163cpcofppr.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163mpktjpxs.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163ieedfvpu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163zouzfpdf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163ypmbnvkq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163emxxsiph.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163gucvsnsr.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163usugzecx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163pwolkkcm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163ktqexqlz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163cfrugjaa.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163lgyxpkuj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163ewjacdlt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163stdefuvu.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ydktwtpm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163sjcfymte.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163uyoaphiq.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163vifhlauy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163pcqhupkm.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163cfsvubqh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163erphxwsh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163cvpwrrpm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163muippslw.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163wgdfmvbd.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mdrttkjw.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163pdssnlnb.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163jjyfpqws.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163rcktalgc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163areewmco.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163pltznotf.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163kmmkpthe.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163uilifbnq.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163tqsrqwmr.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mntrklby.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163psqiuhag.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163skylareg.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163dxdqtsbu.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163uerhcppi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163tflvfrhg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163dctezizc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163yddtcbjh.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163gronjmgf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ihyvxmsm.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163bijdmpjv.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163cycqrtrz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ukjlykxb.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163hbewizsh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163prjwohnj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163heihjnob.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163nrxkkwir.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163bwfvxbqr.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nuhwdbvo.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163vihqyufa.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163xxitwioh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163whzuvqna.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kodhzqkm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ohnoujvi.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163pxndmdux.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163ealsotnm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163iundxsks.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163uhfugrem.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163auwtrwdy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163esuskpde.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163agthswrl.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bvdvlxmz.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163abfwradj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163xjllfina.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zuapjmlk.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rychfjkm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163vlzttqri.html

================================================================================
来源：http://www.aibaodan.cn/163izbdlkqs.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163wnebtecu.html

================================================================================
来源：http://www.xuanzx.com/163euqatrbt.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163wywhrmcw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163jixveunn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xsjtzbxl.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cezmkdav.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ejfxzgoh.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163lcknkmpy.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163xmmxmwsu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163sqvlguml.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163jocdnapj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163hrynzbbx.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163xsfprvnw.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163uvjfiktk.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163ndgxexni.html


<!-- 参考信息 -->