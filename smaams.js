外链999!wailian999！

PHP:  try { f(); } catch (Exception $e) { echo $e->getMessage(); }
来源：http://www.sxryk.cn/163wgqwrnqb.html

JS:   try { f(); } catch (e) { console.error(e); }
来源：http://www.xuanzx.com/163umgszkyf.html

TS:   try { f(); } catch (e: unknown) { console.error(e); }
来源：http://www.xuanzx.com/163wqzhwsry.html

Java: try { f(); } catch (Exception e) { System.out.println(e.getMessage()); }
来源：http://www.aibaodan.cn/163tbfngsaq.html

Go:   if err := f(); err != nil { log.Println(err) }   // Go 用返回值而非异常
来源：http://www.sxryk.cn/163vgnijjmt.html

Ruby: begin; f; rescue => e; puts e.message; end
来源：http://www.xuanzx.com/163bkadoeee.html

C#:   try { F(); } catch (Exception e) { Console.WriteLine(e.Message); }
来源：http://www.aibaodan.cn/163yxwwnjli.html

[H02] finally / ensure 收尾
来源：http://www.sxryk.cn/163fgycxdrg.html

Py:   try: f()⏎finally: cleanup()
来源：http://www.sxryk.cn/163wrazqutv.html

PHP:  try { f(); } finally { cleanup(); }
来源：http://www.aibaodan.cn/163dbnnjvvu.html

JS:   try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163ajahnwjw.html

TS:   try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163phkbnuea.html

Java: try { f(); } finally { cleanup(); }
来源：http://www.xuanzx.com/163ytbsfxoc.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.xuanzx.com/163eehdiibk.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.aibaodan.cn/163fufkcchp.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163lxqoawjq.html

[H03] 主动抛出异常
来源：http://www.aibaodan.cn/163chwjjhhh.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163vdakhrrv.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163jykuwxab.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163twdkorns.html

TS:   throw new Error("错误信息");
来源：http://www.aibaodan.cn/163tfhjoqii.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.sxryk.cn/163epsydnma.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163wimhmiul.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163kkjbcail.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163azmwsilo.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163iqaayaee.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163ruqiftlq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163lyxxnrxs.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163bpixsddf.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163adrnxkig.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163pofbnvfm.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163rwmzyqgg.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163zjrqnmki.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163ytoiykxt.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mdjwkzne.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163kxvjstrf.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163udjqafuo.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163mocedeqs.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163uaocmfru.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163plnallos.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163wanrwyij.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163bjzdbiqu.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163vymmviha.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163vwbdogfu.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163jquaealt.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163rryqrsip.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163unslyzew.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163bsoivhht.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163xujocrvu.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163eqsswcqn.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163mhptnkyt.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163utkwqosv.html

[H07] 断言
来源：http://www.xuanzx.com/163fzhkbvqw.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163zhlbbxgf.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163nkazcowh.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163nmuyplhl.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ptpznylq.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163yiuxkwvt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163mbcxydzq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163jodwjprc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163yajscpkm.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163pikuaksn.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163xjwsoltv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163tlbwcsav.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163ecptmlsb.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163oqbcngbi.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163yvszjrba.html

Go:   err.Error()
来源：http://www.xuanzx.com/163lkmkjmux.html

Ruby: e.message;  e.backtrace
来源：http://www.aibaodan.cn/163ttkvtkde.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163obrxioch.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163dkjfxmyd.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163fyjxsyga.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kdamwcma.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163uevbvvdl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163zdatwxwu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163dusdiuab.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163wngksriw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mcdknqfo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163jezxbflf.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ixnislsb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163eaequayx.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vjyybltr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zycutzhy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kwlogedn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163mlzmypkl.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163chkxrnub.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163symfkwfq.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mrtdcdsz.html

================================================================================
来源：http://www.aibaodan.cn/163swdwfoja.html

I. 正则表达式
来源：http://www.sxryk.cn/163iorfophw.html

================================================================================
来源：http://www.aibaodan.cn/163xxlqbkul.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163hbneqnca.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163pdmvmbzt.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163uhxxfecg.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163sfstrqlv.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qkgqadkv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163bibnyzqe.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163teakdrmo.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163embtkzjb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ubxdxjvm.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ackblxsq.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163xwphwhjx.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163onabyylp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163vkgtsicg.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163aqibxljm.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163mjpmczho.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163stmxdino.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163oucbpqiw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xajsndax.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163iffmzuuo.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163chyyermn.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163uaysdrvg.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163ucidiykm.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163ywkcnaow.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163hkxxyhxq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163hyfuwcle.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163pqsrooox.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163iqixmkjd.html

[I04] 正则替换
来源：http://www.xuanzx.com/163ogowzlrs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163wcvigjjz.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163bmfyfnnn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163frxlnhmb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163spopfhoj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163vuaniugx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163mzcygdez.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163oszzcbib.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163vppjlxsi.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163muikzlql.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ucvgarpg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163bzkcrwgp.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xoelwcwe.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163dcorveda.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163ymufktlj.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163zzdvyorh.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163jlmtvhim.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163pnwyqtgd.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163hgegdvzg.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163urgyeqio.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163pqfmazbn.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163uidrnnkr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163enycflis.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163nuhuepue.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163hrhhuwot.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163snnkuxeu.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163ntqyeqqc.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163zfwivivb.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163dmrkkfnz.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163vfavfiee.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163nutluaow.html

TS:   /error/gim
来源：http://www.sxryk.cn/163txnfwzvc.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163gwlggxar.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163atdiycyn.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163slzmqdcz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163dlwkrdht.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163kohdiuvk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163zqkkqtsa.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163usdjpuhp.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163snkrsngl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163shlkcpnu.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163hvtflcek.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163lmqxyxgm.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163wninuhfi.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ndirofpd.html

================================================================================
来源：http://www.xuanzx.com/163bbdlnhhf.html

J. 日期与时间
来源：http://www.sxryk.cn/163lmlohams.html

================================================================================
来源：http://www.xuanzx.com/163adczeiqq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163zikatkrt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163puiighfg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163zquhlfcy.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qnbghmqc.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ksulfnev.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163bpmvjrnb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163nzpoelmx.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163rnexwqyj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163icvhykqd.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163twizfykj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163sxosbivd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163amiurobd.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163lqgoqvdz.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163mulhkrvi.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163yovcccyk.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163yfgzgfli.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163bwsbabha.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163ahmzkyqi.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wxgvlxxe.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163zulmubcm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163ufiggqav.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163yajobvow.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ytnxcvqo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wadcrrsz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163qaidtdac.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163ypddnkfp.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163pgmpaeta.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163xvrmszvl.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163orhbwxja.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163mveaeeih.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163pesbnsvy.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163awxjhlag.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163ronqrcvi.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163yiflmwxm.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163ffkvizch.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vnnscrwg.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ulpnvncj.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163dfazpkof.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163cqbsolga.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163bmjzklel.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163jmssrajd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163jobcmeth.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163ujfmuozm.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163fyzdgxew.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163hmdopkbx.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163umbotliv.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163mzjjqcnt.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163lqmtnlbl.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163hhvcoxkk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163kuvqssit.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163jroqtemq.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163mfszbrza.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vpmlinpb.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jdppvnid.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163fwgbhqhr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wymhiaji.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163acnihplz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163aogzxosr.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163bllohivn.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163nxrfiork.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jniycfkl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163laxzpyiy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163slyprnjg.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163cxxjqguw.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163xocwohuo.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163yekzjrsr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163kcfbjpur.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163vckcursc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163orhqvpig.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163pgbbtvgw.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163jwtnlkje.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163gbsoidjt.html

[J09] 时区处理
来源：http://www.sxryk.cn/163fuegttuy.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163zkxfqsmc.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163mjhhlvrt.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163wrvypsux.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163mkghylrh.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163jurgvson.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163jdhetlse.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163qipswjgz.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ffyfdupu.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163utmzjssa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ylzcjuxl.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163glbyramh.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163spooyacq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ixyxibqr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163gwijqvuy.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163zozvehgu.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163gcqmeekv.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163tsevembc.html

================================================================================
来源：http://www.xuanzx.com/163uquhtiab.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163sznaioif.html

================================================================================
来源：http://www.xuanzx.com/163ksfudbit.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163ubynrpeh.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163eevpholp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163eqnecdds.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hihoztfe.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163vfbkoxln.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163mwgafvab.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163kebcpiel.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163yptaebgq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163wumrbuqs.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163bgvughhv.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cdlhulug.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163wxveshev.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hifsmunl.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163hlwtdbfx.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163vbfrtodh.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163aoioufuk.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163biwdfjji.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163pplniyss.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163pomvqmck.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163oncxoxom.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163cgbcmypa.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163canjloed.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163qykqjkbx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163aikpkgij.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163sztetvpk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163osujhghf.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pszldjth.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163csehgxaq.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163cnwhewlq.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163rzccqjvx.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wqaupbqa.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163wjmcisvx.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163dsxjcmvf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163kwstskpi.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ormuekcc.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163wujhfjkt.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163layppsgt.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163luljpdvs.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163jsytigbv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vdzssxba.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163dqpzqcbq.html


<!-- 参考信息 -->