外链999!wailian999！

Go:   // 手写转换，或用 mapstructure 库
来源：http://www.sxryk.cn/163koxrnwtb.html

Ruby: obj.instance_variables
来源：http://www.xuanzx.com/163tpbpzvsl.html

C#:   // 用反射或 System.Text.Json
来源：http://www.aibaodan.cn/163epkeektn.html

================================================================================
来源：http://www.aibaodan.cn/163ceumlhpb.html

H. 异常与错误处理
来源：http://www.sxryk.cn/163pzzmkyac.html

================================================================================
来源：http://www.aibaodan.cn/163bujqciuy.html

[H01] try / catch 基础
来源：http://www.sxryk.cn/163pyzkdrta.html

Py:   try: f()⏎except Exception as e: print(e)
来源：http://www.xuanzx.com/163witgftlu.html

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.aibaodan.cn/163cxwarlbv.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.sxryk.cn/163agsolucj.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.sxryk.cn/163ynsswdlp.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.xuanzx.com/163lamrdrfm.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.xuanzx.com/163ittwdggy.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.sxryk.cn/163npuewwop.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.xuanzx.com/163wvcsnqtm.html

[H02] finally / ensure 收尾
来源：http://www.xuanzx.com/163uzqnltpq.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.aibaodan.cn/163gbiramvr.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163opyssxyw.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163pmlesslg.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163fihdnsrv.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163bzcbzkws.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.aibaodan.cn/163knxtmfnl.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163wecnkvpi.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163lphfvaow.html

[H03] 主动抛出异常
来源：http://www.sxryk.cn/163rpvptwct.html

Py:   raise ValueError("错误信息")
来源：http://www.xuanzx.com/163djnpnzan.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163fvluervo.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163niphmycd.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163noutvamr.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163vjxjeemj.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163iqnxjtbz.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163fuumnzrk.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163iygekgol.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163fivhfotm.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163bjsbftkz.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163xsotwqck.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163cqosotro.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163xwfclcuz.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163qvnqkqab.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163tjmrnxae.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163xokjnrkc.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163vmutxtgq.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163ehtgmwcc.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163nsgthxvf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163ttlgkbih.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163cooixune.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163yafbgvfj.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163hjdwnayk.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163kxmqakff.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163kusxwzch.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163dnrfjsxq.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163rfldfovy.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xrbuhiup.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qivhopqd.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ludqqugz.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163hifzexrh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163oatgvkuz.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163rhaxvceb.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163dakxjnrv.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vjseatzm.html

[H07] 断言
来源：http://www.aibaodan.cn/163kdshpqki.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163lllcmlrl.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163ybbymxtx.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163qnrxacku.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163xjvvwwkk.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163mineqsmy.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163yyvtwwtw.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jarqdbxb.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163ypxfvped.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163yeabvelx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163vbhiaaaa.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163nidgeapv.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163omzpcjuf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163jazctpir.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163xjjlcrgz.html

Go:   err.Error()
来源：http://www.xuanzx.com/163wzhenmsx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163fglgnods.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163hxbemgnr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163gmfujzoq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163iznbrhgj.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163vqbbvqvp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163yvmqaalq.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163wmaoezqy.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163ktykrekc.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163evsmuhdz.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163rxwvolmt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163wctwmzoe.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163lrdsczis.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163xbidlxec.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163mfveocmj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163qysnbxnl.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163xeerwztc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163zcoswrdo.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163uvfrpsop.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163pwbowjck.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xeivdggy.html

================================================================================
来源：http://www.aibaodan.cn/163wuoigxvf.html

I. 正则表达式
来源：http://www.sxryk.cn/163xcljwumv.html

================================================================================
来源：http://www.sxryk.cn/163oizjvvbn.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163ciimmmap.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163fsbnsqlk.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rpcfcmdr.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163iipmdnld.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163djslsmgf.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163xgkxkxei.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163qqovbibh.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163mmfnbsqp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163tpurgkwk.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163tgjovwey.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163gkxwtmff.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163pwcjsoox.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163xwvlllop.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163dheovmfa.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163uyjaylhm.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163sdszowtg.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ucsxvwbx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163vcxugama.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163qgxeojsh.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ewjpggxa.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163eahzyxvt.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qbpjbeao.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163krnrmjvd.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163yieljzna.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163ombcyjlu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163vprxpldt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163znsjhjzz.html

[I04] 正则替换
来源：http://www.xuanzx.com/163pnjjgwrw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ticlgeiz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163jvjkaapf.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163cvxyicce.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163doxgmykq.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163eckyyltw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163xpvoohae.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163ukhcqphg.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163tvxkfyqb.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163owdskwue.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ubzxqlph.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163sbtkjzcp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163sgpjeecb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163alnucnzz.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163uqslybud.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163wqakitam.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ctxxpfkq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163dbzhtkhe.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163sjkuxjhs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pdirucdr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163kwsgptzn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163jybwghnc.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163vcjhqwgg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163puexzhym.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163rmtzrduv.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163cgblvtmr.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zjfrebri.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163edflfgaf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163ympfqghz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163nhbnduiu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163biicfgzj.html

TS:   /error/gim
来源：http://www.xuanzx.com/163uztrobag.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163ddbuirlz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163mghuxlfg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163uasifnus.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163tjqtrjhl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163mbnfwtbd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163mfzcqerq.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163qdfelfbr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iudqqzzy.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163fidcleap.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163zzjcyita.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163coeihmqj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163qelialxi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163wqhxctsu.html

================================================================================
来源：http://www.aibaodan.cn/163afinydel.html

J. 日期与时间
来源：http://www.aibaodan.cn/163yujpvywk.html

================================================================================
来源：http://www.aibaodan.cn/163sjnqszxl.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163dmczacse.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163ywvkjgaf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163jtwnwxvs.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nfuwjplv.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163cvhauntt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163gjfatfiu.html

Go:   time.Now()
来源：http://www.xuanzx.com/163kzlfxbef.html

Ruby: Time.now
来源：http://www.sxryk.cn/163nyvwzmpd.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163hgxuwxca.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163wnveurtw.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163srpdbgkm.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163egkhatpp.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163dqmutbfp.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163bzcwhmqv.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163cxoklobb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163dvhxsxxv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163lrteijie.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gveyuuuw.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163volxirye.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163rfovofix.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163aqgkvhag.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163ccxdsuoi.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fehhyggt.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163phymzcyd.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lfxrqmel.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163efanxnpq.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163qhftdzrd.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163otegjkbx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163vysdkinw.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163fekoobfs.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163vgrlgljf.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163vhyyxiff.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163zorvrahz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163rilhrstl.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163bmucflaa.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163enzhzrgh.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163lsfxmbpi.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163esauwshw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163tttfyibh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163dxmahmrb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163imrtbyuf.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163tvzknsch.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163stxxzbef.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163qchlecns.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163hvbcjphc.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163lylimyio.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mcpcamcb.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163iyzyvdzj.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163sbzjdztg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163rudwinnv.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163yhvslret.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163kpxcjyup.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163rmogvany.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163swmyktjh.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163ghzggwlk.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163dxcshxwy.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163hwxiqdrk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163hqqnfhqz.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163phlkhmsn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163jdayuapy.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vwfispyx.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163yujbqcda.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gdsiwnhy.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163vjmhsphq.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163yymipawd.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163vlpytzhc.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163laoxdsfd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163qhjihbsh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163tmpxexsz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163tdczvtfp.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163pfxfpuqz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163tiuklmda.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fcjsmlxr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163mlxqchgl.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ymbxxzwx.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163antjxjlf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wgxitcqw.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dnbcmfmo.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163znfdfagg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163pzwijyjf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163sfipfksr.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163favaqbrz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163fcolsosz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163jrdtnbzp.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ukhsonjn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163wenxwymm.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163lpdfntdu.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163qvfozpui.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163lpznqqvs.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163mafgiyks.html

================================================================================
来源：http://www.sxryk.cn/163qrimqbnk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163qmltcuhp.html

================================================================================
来源：http://www.sxryk.cn/163jwzcfced.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163huntwnwl.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163embvbifc.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jsijhwrt.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ywhpewiu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163wxfltsut.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163hdbvndzj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163jhuixlpp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163dfqlqmqt.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wqvrlebk.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163gdxrkfoq.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163yfsnksmv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163kbrjpuol.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163sugnwaps.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163lcgnmrou.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163utxafcqm.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lmlxkqxg.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163dhwezvcm.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163gjytriol.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163uyetxfvi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163buhudsfd.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163mcwbvmmp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zhaugosp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163menvhgkv.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163ftlpjmks.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163ogecigof.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163nixobyyi.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163mwdivvzh.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163tzbvvcce.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163nhtcxdnv.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163pepeqjkj.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163xwxjafmn.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bqpxdqol.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163krxuackb.html


<!-- 参考信息 -->