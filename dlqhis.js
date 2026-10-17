外链999!wailian999！

JS:   const Color = Object.freeze({ RED: 1, GREEN: 2 });
来源：http://www.aibaodan.cn/163lqhdrqhg.html

TS:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163tpxjeoqy.html

Java: enum Color { RED, GREEN }
来源：http://www.xuanzx.com/163udufshoy.html

Go:   type Color int;  const (Red Color = iota; Green)
来源：http://www.aibaodan.cn/163etmdlhkb.html

Ruby: Color = %i[red green].freeze
来源：http://www.aibaodan.cn/163tqcssmwd.html

C#:   enum Color { Red = 1, Green = 2 }
来源：http://www.aibaodan.cn/163pvukubmb.html

[G16] 对象转数组 / 字典
来源：http://www.sxryk.cn/163tamhtwfi.html

Py:   dataclasses.asdict(obj);  obj.__dict__
来源：http://www.xuanzx.com/163zvchaazc.html

PHP:  get_object_vars($obj);
来源：http://www.xuanzx.com/163smmouptm.html

JS:   Object.entries(obj)
来源：http://www.sxryk.cn/163sxdqxvhl.html

TS:   Object.entries(obj)
来源：http://www.sxryk.cn/163vlwrmlsc.html

Java: // 用 Jackson 等序列化库，或手写 toMap()
来源：http://www.sxryk.cn/163dfvfzwrc.html

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.xuanzx.com/163lbhnnslr.html

Ruby: obj.instance_variables
来源：http://www.aibaodan.cn/163jzltsugb.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163ekggqagn.html

================================================================================
来源：http://www.sxryk.cn/163ilmjuhxx.html

H. 异常与错误处理
来源：http://www.xuanzx.com/163wocjzpes.html

================================================================================
来源：http://www.sxryk.cn/163ghkhevsx.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163ehibqxxq.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163qhptxtib.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163lpfqjbpq.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163wdalifkf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.aibaodan.cn/163clirrlsf.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163uyymnxna.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163hrpqlymr.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163efvvyxkb.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163kahmquwv.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163ywrghwxx.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163fwhaefnp.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163wijybqux.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163mvecawqx.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163cdbsvhvd.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163eskiwlog.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163ewkqfebo.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.sxryk.cn/163fbucryna.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163prtfdgyw.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163dpmpprsu.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163fhfihpgh.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.sxryk.cn/163quiidwfc.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163ensedacd.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163rdqckfwr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163zfhgpsgk.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163kgvxceor.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163iadaxqlt.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163amgwrexr.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163uzmwojis.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ruyqcrxi.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163twngicco.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vsvwirlk.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163yddecbfd.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163pjmktpfc.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zizwurhh.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163cvoixqyg.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163uuxwjipc.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163kgwtdmnj.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163styxdtuf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163sspolocd.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lddvzfcy.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163vnbfrbbh.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163hbnggyol.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163lnohbvue.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163nvgofiyf.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xfcsopns.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163gjpderbp.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163uafpszgr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163xyxbidsj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163fwateoyr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163mlkztzhc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163uaanvfdz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nlgzhyrv.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163xwxikepe.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163kdirhjec.html

[H07] 断言
来源：http://www.sxryk.cn/163yvfqinaj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163krsuunly.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163xfvmkmho.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163zjpsgwjz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163jzjjyfkb.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163vadokqav.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163dfjzursd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163gtbaivzh.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xcgwezai.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163pbzpnjud.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163wbzlbfia.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163qxqpdkwc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163gunkltvv.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163lbcbwigf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163qnlysptr.html

Go:   err.Error()
来源：http://www.xuanzx.com/163lnmgvutf.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163flcokfpw.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163ftqjlqev.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rmjfydsd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163xbafdery.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ohwqkpky.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163vwgpaowv.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ujrqklue.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163wkbzumkw.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163jkpquffk.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163fgraoart.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163nwbyxgcl.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163raklisec.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163rkdlpkva.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163eosllicz.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163tigcuqjy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163nnxnqcgp.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163gnnupuoj.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163hdqcmyjt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163mcxxxyom.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163agjufocj.html

================================================================================
来源：http://www.xuanzx.com/163aomnxvgb.html

I. 正则表达式
来源：http://www.sxryk.cn/163vrgcfkfi.html

================================================================================
来源：http://www.aibaodan.cn/163szoohuns.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163mbfxbxnv.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163jtanxvak.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163vyvduptb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163hgwjawvr.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163bpaeucty.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163zhpgwlzx.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163kblasfty.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163eszrepvg.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163blngoddc.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wbnywpvh.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163qizwwcux.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163gadlcuci.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163sezgncgn.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163alalbkyw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163ovrmrjgo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163mscajwwc.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163spjcvtfh.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ubglypqa.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163sluogofz.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ysmzszyp.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163wehhlryi.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163opufsdvy.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163yowzdskt.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163sjjpunnz.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163unkznqjm.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163kxdhjvne.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163otaantnm.html

[I04] 正则替换
来源：http://www.xuanzx.com/163sldhcivk.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163cfohlfds.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163iitpsisv.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163bubqssto.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ezuvkgkg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163qcfuqyhd.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163uwebxyjs.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vbwkcutb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vhyjmbxg.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163tzzoiccd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163rxfwarqt.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163rpuamnwv.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163bixtozmr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qdgxvdzy.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ziidrhkh.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bywlskis.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163xppktueq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ybubqlwz.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wuwvxfhr.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163urozmawk.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163poetkllp.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163lgucilqe.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163aonzxbfp.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163lletejhq.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163ruhznyub.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163jqavdcer.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163hwdftqis.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163fpibfazl.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163yyadcaaq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163etocceup.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163ccbqywlp.html

TS:   /error/gim
来源：http://www.xuanzx.com/163dngmxczh.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163aczefvkf.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163wppisqmx.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163kbpisapq.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163hnvfcqtc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163vavfdbpq.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163fzqqwwtt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163hdvdsnas.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163aaouxxdd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163zzvybchn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163gpryfhen.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163mtizsnrq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163vyeujjuf.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163tqwenetj.html

================================================================================
来源：http://www.xuanzx.com/163ozqbpsmv.html

J. 日期与时间
来源：http://www.sxryk.cn/163bclyempy.html

================================================================================
来源：http://www.xuanzx.com/163usevuqou.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163guwkvobz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163jzmodqzn.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cbqpbbsr.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163lufkiwul.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163aqvhpgyl.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163aclztots.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163fcubulze.html

Ruby: Time.now
来源：http://www.sxryk.cn/163umyustgv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163uecmqdsw.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163zaajhrhz.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yotswglb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zvkskfzb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163eorbfybp.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kwwsvoam.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163kenjhjnr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163crgkommm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ywmecdwq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163oklpatqv.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163vesvhlxj.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163keioxuyj.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ozuzfgpm.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ffqpuadt.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163wdbsekek.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163okidxurw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163ysnegjjy.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163cvrqdoqy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163gfcfpzjk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163hbngtfdx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163vkvwqywl.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163rzcjouxv.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163rdnouhwn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163whjkhzhl.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163facmvpve.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163dbjqjzmy.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163kuuylqpg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zjedpeaq.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163huumcvoe.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163pdvemebd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163cjnnqswv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163zliemuzq.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163wgwqyjzk.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ophzbcdg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163czzdoelg.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163uprsrtte.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163nefidzuz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163ghicreny.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163zxzbodpx.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163skriywyj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ngulcgwj.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163choaacfa.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163uvpfcayb.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163crjjxilx.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163scqvlyhm.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163uiqdmnss.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163lhwovtbu.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163foewuxdr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163iprgnpkd.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163yxeizckb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163aeoblesn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163quaegqfg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163frxijdgj.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163srbgqpkf.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mfeinbao.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163mrhepmpf.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163fdbgbqxa.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163tonvqfci.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163hqdoidky.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163egdohhwl.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163pbibphec.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163iojgqlae.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163gixewyph.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163piwjxeue.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163pvukdsbi.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163qeydaxof.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163afqzprev.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163nsujkvhj.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163hrpzhzwe.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163pqpuduoh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163zilvgiuu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163yuhkmszf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ytweifqq.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163fjiynlvy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163szduxhes.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163owlzhbac.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163lfudlueh.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163tlkmpvbj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163jxtriopf.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163zqzdwcrw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163yhjzkxkp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163pjwlzgqv.html

================================================================================
来源：http://www.xuanzx.com/163rnrkogpk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163qbtpzbbj.html

================================================================================
来源：http://www.xuanzx.com/163usxqsvzh.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163kjsbjgaw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163qdpukvfa.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163ofbxzibs.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163gqehjrsr.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163aalwuzhz.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163llqggahh.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163aylafvqy.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163qnnrcpzv.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163rekreiad.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163mcqdtqkr.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163pajoojgy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163iztdazhj.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163imugnmhg.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hrilyreh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163tdlttkyj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ouluugnr.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nbmglelz.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163vzqucavm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163gytxgdje.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163ifeafwfz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163dyaqyeoa.html


<!-- 参考信息 -->