外链999!wailian999！

Java: try { f(); } finally { cleanup(); }
来源：http://www.sxryk.cn/163gewdspqq.html

Go:   defer cleanup()             // 函数返回时执行
来源：http://www.sxryk.cn/163reoqjnkt.html

Ruby: begin; f; ensure; cleanup; end
来源：http://www.xuanzx.com/163owmmyxly.html

C#:   try { F(); } finally { Cleanup(); }
来源：http://www.xuanzx.com/163qjogdney.html

[H03] 主动抛出异常
来源：http://www.xuanzx.com/163nrcmjoln.html

Py:   raise ValueError("错误信息")
来源：http://www.aibaodan.cn/163yubjgpvs.html

PHP:  throw new InvalidArgumentException("错误信息");
来源：http://www.xuanzx.com/163xolxjlee.html

JS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163uacczvng.html

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163hwgwyoxn.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163cxumnzqh.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163gbpfhcpn.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163lgjfhuhn.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163ujddfwtx.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163zpacjhlr.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163jdavbxpg.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163gxpceimz.html

JS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163fbrkmehu.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zbpxilxe.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163ddmqsoxi.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ptazhvwy.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163yvoraxlk.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163qdttxfxu.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163ybupykzn.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163auvjzerq.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163onxxiyzj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163asecgihu.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163cmdeyanr.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163uvutuygq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163dzcapuvw.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163hshakgby.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163rgrgwtiq.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163potnbutb.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163pcrrkqpx.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163otmuqzsk.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163vnyvkfje.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163gmoweyeg.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163adgapskw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jgbrcllh.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163vxjyuatq.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163hxajyvbx.html

[H07] 断言
来源：http://www.xuanzx.com/163kagohvxw.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163wehnyaam.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163jzsfffzy.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163qorepcyf.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163sfkajdvi.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163wbxmepet.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rrdhytoc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163qzirhtov.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163zszaaurd.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163wtdokyfz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163xpjrkguv.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lpixubqw.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163awpwnddw.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163ivrclpov.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163cmoswdtf.html

Go:   err.Error()
来源：http://www.sxryk.cn/163uyjbnpef.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163qewlrodz.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163lsxhxxog.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163igjnqolr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163woofxsah.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163ghxrresp.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qqlogxug.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163seoklssq.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163cgzprett.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jzwkxdbf.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163hrzktdlh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163kxhqdsin.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163ywwsxnmc.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163ajftiqtt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163hnwqrcmh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mojvpxsc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163zvokbufn.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163drsbxdpu.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163gaonzczo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163xzrquzdc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163jobexdth.html

================================================================================
来源：http://www.sxryk.cn/163ndiiyrje.html

I. 正则表达式
来源：http://www.xuanzx.com/163kcxravvl.html

================================================================================
来源：http://www.xuanzx.com/163dfnxzwtj.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163xbgffmft.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163cweyspjh.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163pfkrabrx.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163haxshdsk.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rudrzdad.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163eiruhzly.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163erutftrg.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163lvtgvrqr.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hibjdfst.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ggopirwe.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163avfqzklb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163aaccylus.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163jkxidjmx.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163vcpunujr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163yhgnpusk.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163uqcfcawz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163ojekbwme.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163lfatevri.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163dnyggpvt.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ltffplrr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163wtdmjrma.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163rgpkfrwn.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163psnllcij.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163mupexqxn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163gwaliwxr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163rzmpocxx.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163fqbqerns.html

[I04] 正则替换
来源：http://www.sxryk.cn/163skfgifbh.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163umuacrxe.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163sgiysjai.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163suzdmliv.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163lpoplwvj.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163mjrepxvq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163qynubcyg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163mrjqgdsa.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163odcivnlq.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163bzjzojct.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163kcbxxxsb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163bnpqpbjm.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163niwtnqyk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163spbhvlkj.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163mkdfqqua.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gjgcxbna.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163qxbsjxgl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163chfebuhs.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163ilkpqooy.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163znhlexqn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xhmhyags.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163koflluki.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ujxmppad.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163thjawrrf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163czhjgqvm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163sknhsihs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163snvcklgr.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163jnrcxepj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163qjvinkvo.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163lwdzmniy.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163hddxxtaq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163tultdtup.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163rklqqslu.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163itdrhvid.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ebrbxsey.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163sqciwvhl.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163ivoyyuit.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163dkmocrxd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163envaamam.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163shwxsaul.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163eclwdwpa.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163okfbpkih.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163oapcivjd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163gzkfyzer.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163igrhvxag.html

================================================================================
来源：http://www.sxryk.cn/163snbanxcq.html

J. 日期与时间
来源：http://www.aibaodan.cn/163xqxivhrx.html

================================================================================
来源：http://www.aibaodan.cn/163cqvarrmn.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163npprzkvm.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163vtammtjp.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gvrboykf.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163mgmllqyo.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163oiychnrm.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163kibzyycj.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163kqnzxuhq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163zzfduktv.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163dlpoaezv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163lyhxjjuk.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163anhoyplx.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bpxpcmlf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163nywxdczr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163jajyhnmm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163wxlggltg.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163yauvabea.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163lgqngqzf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163whondzua.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163svqnsguo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mmffwwbe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163eeglbtfz.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163oguvvdoy.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163hfxqgvbg.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fqixndce.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163rtkpqofi.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163jcydrwet.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163edxfbuoa.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163cwnxbhbt.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163cgjqofnj.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kchrtnrw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163lmaqppff.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163yrhpeala.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163afxfriwo.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163zvdcazms.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163jpplcvns.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zrflfiut.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163kpvmfohr.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163zjautgpo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163qafejgkx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163iyboizwm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163hgwzybfn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163nlbkyizt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163myydvizt.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163pmwgloqy.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163takzhamp.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163iactxbvn.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jcsraepc.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163tawcygwc.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163qskshuqy.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163vifreums.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163hptwtjqv.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163hefwufqd.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163iionezxe.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163mldzxxjb.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163gjeqldvo.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163euorxhkh.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163cwixqjzz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163vqfyiong.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163qlnvipur.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ncmkaohc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xwmocaxe.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bjejjqdd.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vxfjmeyj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ksftgznx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163gjzmjjvp.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163wbayjehs.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163tksazgsi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163lqxcyyyj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163rnhppxao.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163bdoqyiym.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163dhcvumwz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163ssytrywi.html

[J09] 时区处理
来源：http://www.xuanzx.com/163nawkewey.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163aomtzttz.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163wtzaufau.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163mapjjfdu.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zuxnjwoy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163olpxzpbh.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163dnzhqgrp.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163zodstdqd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163swwipint.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163bxkqsidq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163ppjzrobv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163sjbzpeiq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163wmbltjek.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vtkgcupg.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163hmrschtk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163qvnqlpac.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163dhguadqo.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jxunvmsn.html

================================================================================
来源：http://www.sxryk.cn/163uenlrxxl.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163pbvmrcbw.html

================================================================================
来源：http://www.aibaodan.cn/163dulgfxzd.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163fmmagung.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163jbkcqhzg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163grmjkapf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163hamsahde.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163cjzaptfo.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vpjqoagz.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163msamqlsl.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163kqrsjvhb.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163zjxzmnbc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ojbixshz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163shkydutd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163wfqodpui.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163lzzizimj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zcbmovhn.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163gilygmln.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163naposhow.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163gtzkgoyl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163oapmbojz.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163ytedxwwx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163xyskvrgv.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163umggbofm.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163tfjojzgp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163nwnojcib.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163wkbpgdau.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163muudtqwq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fpolaiws.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163vsuvtpnm.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163yoricmiy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163lkpdcbau.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163xgkasohy.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163uxovaszt.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163hkgymaxq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163rjtmzbmg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163gywcvhna.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163rldvlkzb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163gdamlpuq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163kfetbooh.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163oqwjqjqq.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163wqerqayl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ghkqkval.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iccvyuod.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163qanqvyet.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163jwzanjxj.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163mguyuyua.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163irnqlojl.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ugrfxyby.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163srunhjnv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163azmkfjwv.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163soqntxci.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163juqfbwlr.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163onfjszpu.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163urzscyis.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163pkknkyrs.html


<!-- 参考信息 -->