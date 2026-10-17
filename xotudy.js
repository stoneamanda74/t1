外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163dwalvjib.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163fvfyjfbn.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163trbtvybi.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163szklzmup.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163bgayjcrj.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.aibaodan.cn/163sjtaryou.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163ljhvnhbl.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163hsvkccce.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163qzouyjwd.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163vjotvowl.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163igkaezcv.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163jeuhouil.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163abkcfrbp.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163mssjtkjz.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163ciuuahxh.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.sxryk.cn/163dhdlcjod.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163awiumpzk.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163qjieeaht.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163pluvfftd.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uyqpdlgl.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163qdwoeonn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163sgvrtfok.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163ktfndogl.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163ylaythnf.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ffdnkjlh.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163jsxifvbp.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163ptzqluzn.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163mouboici.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zamreodv.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163mhunjnzk.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163fnkwgjfr.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163zuzjbzcj.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163jbzhhswo.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163mihfvooo.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163umkuvibx.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xtljyneq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163gnchibkx.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163bizqodfp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163haaruvky.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163gpxanvbb.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163cexhdzgq.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163eydfcrma.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163vmpgvwht.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163aqwuqods.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163knlbgbea.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163mhxlgijj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bifcjylo.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163lmidwdli.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163cwilksox.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163xotsuiga.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163zliimcvi.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163lyeznmwr.html

[H07] 断言
来源：http://www.aibaodan.cn/163amotbgvs.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ytewfaqx.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163gybfeccy.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163gahuznta.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sjekeotg.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163jwuiddrj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163bsgvwkbi.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ntdzypwn.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163zgbeihxp.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163uvmfcegb.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163nyocjqsp.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163jvykyycc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163yzaexfmp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ebhcjgfr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163figksoko.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163lqiqhigi.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163tcivixny.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163tneyhpvy.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163vqxofidu.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163tjokjwkv.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163bohfftjq.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163bbriyoym.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163ienlxamm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163uvsaejmc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163kwiebtgb.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163awgllljp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163usccswke.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163inwnsach.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163sdhqzijd.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163hwiikmww.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163bhodcwmp.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163wrmksleb.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163vguixeym.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163wckupkcz.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163dpuqjzri.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163bztvqeyk.html

================================================================================
来源：http://www.sxryk.cn/163rhlxtpac.html

I. 正则表达式
来源：http://www.sxryk.cn/163fbzxmedt.html

================================================================================
来源：http://www.sxryk.cn/163hhikergo.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163rypjevxc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163kgfbxrbi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163pwzjclfr.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163putndeks.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163gzocyecm.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163qemsmqzb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163ailojjea.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163osrzamkr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vwwijcml.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163brpkzxad.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163eadbmotf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163kmbiodmg.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163qcihmhqf.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163fawsxtvr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163yfjrhkmv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163gpblvfki.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163gidbztiv.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163vrqkiakk.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163slexwait.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163agfvatfv.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163ymqdqxis.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163chdolpud.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163upesiryq.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163spizsgte.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163neoxlqvd.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163ybdwoguq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163lkmcmfka.html

[I04] 正则替换
来源：http://www.xuanzx.com/163fqjypsxb.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163lhefinoa.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163tdnkbsqr.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163eaydcohp.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mndgbpxg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163xjvtgote.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163dtdaarah.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163aqxbbpne.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163oxxxjscn.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163lbnqzwxd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163igxoobar.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ufwpfqsf.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163glflilgy.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163sqijrxwz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ftcbuehg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163fkqcqzwe.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163hhpvrpam.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dclyaeaa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rbhgaysf.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163uzvzcqen.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163aqyqbfmc.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163oszvqmfh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163mlnbeipx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163jqnoivcf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163zvddxmye.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163xuzarqhr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163cjsterag.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163eseqqotv.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163zjizxufb.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ywmvumlh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163fushuoqp.html

TS:   /error/gim
来源：http://www.sxryk.cn/163civdmxby.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163qvlxisln.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163khiuectx.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jvyxyrhj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163aawrdxxm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163vdbtbiat.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163nzmizgrd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163shuhzedi.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163eamuhctm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163buyhrdkk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163kcyojutr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163dbifcmld.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163amzwtvat.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163somqvxzd.html

================================================================================
来源：http://www.sxryk.cn/163lxrgkdzj.html

J. 日期与时间
来源：http://www.aibaodan.cn/163sfrufwmk.html

================================================================================
来源：http://www.xuanzx.com/163hiowlqbs.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163gggrqhdn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163bbapnzlx.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163nndtskgr.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163rpgwfqvo.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163erendena.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163tvdjplam.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163kameluig.html

Ruby: Time.now
来源：http://www.xuanzx.com/163clvhfpic.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163txhgkfdz.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163qskdkgrh.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163gdblklge.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163skvuraur.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163oxgjztps.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163sigjfayz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lscdosee.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163vedhjrvg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163zskwvzwk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163aelpadgd.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163phithqwx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163dqwghdws.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jkvksfns.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163advxwyyg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163gcdxnuhf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163dmiwdpze.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163umeqwaoz.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163tnwcuaoh.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ixuthjtr.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163jmgixhlf.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163hwyhoxze.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163jpmyjkde.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ycffpmbw.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163aqtuwvsb.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163jeuffbor.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163zzpulhpo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163eizzzldd.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yevrvvem.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163jcndpsdu.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163shiyftdy.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163taozauet.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qxoxxemv.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163obleywiq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163wttzfzlm.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163hfprxrlm.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163evmsofst.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163bbbnyqdd.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163kwnhfazq.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163stvljvul.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163qkezihgx.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hztpzmdz.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163adyjcslg.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163cttkxvry.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163eymmoxsw.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163shfctjeu.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163vuwxmylw.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163vhrpcplw.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163dqfbaowz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163pnjdnwkt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163rksksboo.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tkcndmee.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163huzabbjg.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163cigenevu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163cjcxnair.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163eibbciyo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163nkkmzwnb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rdaqfxiq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ecfrdohx.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163fjevhjuo.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163poijzmex.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163tbhttuhv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163yptxseoz.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163ffkbcwan.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wzynvxtz.html

[J09] 时区处理
来源：http://www.sxryk.cn/163gztghixg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163rtenqwnr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163jggkkieg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bwtkbhbm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163jtgzbdhy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163duztuvay.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163ahkczavf.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163ygibrtzq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163urfzndol.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ljstutal.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163lfetnbma.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dhhcsdwx.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163jpyncoog.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163yxtynfvk.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163odsaqijo.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163uxixxufa.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163apoedvha.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163zwuwjacc.html

================================================================================
来源：http://www.xuanzx.com/163hipwkosf.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ipsoragc.html

================================================================================
来源：http://www.aibaodan.cn/163yetcjzud.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163fivqgcun.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163luyoqycx.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163zdjfftce.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qwmympfi.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hnkuvemu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163llrlfokl.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163tvatalcu.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163majnqodq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163xdgzdcce.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163xncrtjep.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163qpjxqvbg.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163kkbnaogr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163bbkzujaw.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jkvlblil.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163azrchvmp.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163hvcxjvvk.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163belcabdd.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163zcvcbxjb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163oxdhiypc.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cpqtzdwl.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163xhpuhvpr.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bfxxjyfy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163gazovbml.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163efcjcdgg.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163qciwycas.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163zucsuwhy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163jfczugmi.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163hksypxcg.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163eyzaqiqj.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163eseprgiu.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163hlqkaqjl.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wcrbxdjc.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163qumgdjbq.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163nllelqxy.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163rnzgohmy.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163pvxpjoth.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163ostapdeq.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163xlexawoj.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163hzgrpkap.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163rzkkqski.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163uqfgevxa.html


<!-- 参考信息 -->