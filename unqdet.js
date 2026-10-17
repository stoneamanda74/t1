外链999!wailian999！

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163jqvnwmqn.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163edrtpajx.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163ydgzgswx.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163ptvrdyfw.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163llbneumu.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163hpshomfe.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163hbngafyw.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163fjifhezs.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163hzztvirc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163cafzbkki.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163lgdgfojr.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163nexfhppw.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163yvzbzwbp.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163etwgeuts.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163wbnshnwd.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vuadqbja.html

[H07] 断言
来源：http://www.xuanzx.com/163amfqnpvx.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163vgocdvna.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163vduowrnb.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163vaacypdy.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163odllebar.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163yxjsdgkt.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163hkphgrgt.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163owxvblag.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163qizwuxlq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163xyomnbic.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163abgdnhlo.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163uexokgma.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ctliutqs.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163txgzbbyn.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163xqfbyyhd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163kdndknar.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163idjjxtdq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163zgntwjws.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163snsxjuwr.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ayincdkg.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163hwkmyxoh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163djhqreif.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163vqcvvuuv.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163bterzmsv.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ablijlev.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163inkoxwdp.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xadlchdh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163gzwxanld.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163dxxpengw.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163exzrwudh.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163etzpsjdv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zmvadjbg.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163bikynbre.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163crgzdabg.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163cfnsafqk.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163graalvus.html

================================================================================
来源：http://www.aibaodan.cn/163abctvdhs.html

I. 正则表达式
来源：http://www.aibaodan.cn/163twiuhiub.html

================================================================================
来源：http://www.xuanzx.com/163otqhbqeq.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163fdogfexq.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163gaxcrddc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163ezbsqape.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xxaqpuzh.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qwiyzgje.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163ocutratz.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163oxkdlpyn.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163kyavmvye.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163imfspqgd.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163vcfrfzvi.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163zepbvpao.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163rmvndwhv.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163jeqexxwd.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163cyhdyzsl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163iyfnrrkh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163wzoqzilb.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163xxuzkaox.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163kuhkankl.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ukiyvbxj.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163pwvitwrx.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163pyuuxhoo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163ebaezjnh.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163fsxvoifx.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163tqfyucaw.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wgayzfqy.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163tocylfbk.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163cwiieaba.html

[I04] 正则替换
来源：http://www.xuanzx.com/163anqjnhyz.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163vbxduhtx.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163wvopuhuj.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qzopznyl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163tpouoddy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163jfqrbafu.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163jlwrmkta.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163eujwtatc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163fujqqonn.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vocoipiq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163inknbjro.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163zechwptg.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jasqzohx.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163kkfdwrvy.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163dzopivij.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163xfdlnifg.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nmpgatxx.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163rncrltwa.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163mloczypo.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163nrsfbhzy.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163beckdobs.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mpzqtekx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163dqppgjle.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163rbuizwco.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163ybnomzks.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163rfkdsloc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163tyegzcds.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163vitywhcu.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163ghqcxyar.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163ndfcymsj.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163kugzaiuh.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rwpjarto.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163svrvlgfn.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ohlefydm.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163jeaaceta.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163adnrxyhq.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163mrkzhomm.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163efzrgmnv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163uwlvqbrl.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163uldeeoxs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tzsnelze.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163pooqvuzb.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163jnzygxjk.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163jxnqkbtl.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163agmnchaz.html

================================================================================
来源：http://www.sxryk.cn/163uomyvili.html

J. 日期与时间
来源：http://www.aibaodan.cn/163bpotrwmg.html

================================================================================
来源：http://www.sxryk.cn/163rahmjdvn.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163giphvbhn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163ppjwvicv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ptfjfyzh.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163brjrxbti.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163oovdykyc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163upvmelbk.html

Go:   time.Now()
来源：http://www.xuanzx.com/163zfbgsvvg.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kcsmvjdx.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163obbbkned.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163tvramrbg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tvwfxbff.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163balwevii.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ctkllkxk.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163fnrcberm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163rvhgkqdu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163qacamrzk.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163ypekwhmu.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163jixqyjnp.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163pocwxqti.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163zlaevemg.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163ggctoqxw.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163aswlpkcm.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163zxshsbkz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ovsbydzp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163akgyusro.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163iqpbqcxy.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163bvzqzush.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163dglcvbmz.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163esddnbtf.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163nzonsinf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163jxubkkoq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163kmebwape.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ystywjru.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163luznxeqp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163sjkjubpa.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163pvkunapj.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ofsbfqqc.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163qszmbozj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163ticinlny.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163svnvfnsw.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ygtxqtwd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163xxhqecun.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tgyuzjev.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163bisexyij.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163qupmqbyc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mmvsvkor.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163xbuvtuiy.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163zymveejq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163sbzrumqr.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163czanpedc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163izultfyr.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163gejesbsm.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163lqylsxya.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163utgunqrg.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163skoilmxg.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163faryvmvm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vfwdnaue.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fhciwykv.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163zdnfhwzz.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kfizuylc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163odbqeyse.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ztwngkvz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163hdzyltha.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163cpmmympz.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hkwxxqba.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163dpmffuyr.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163xlpseiuf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163kopnanke.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163lkjkxrnu.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163ihwqxlaj.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163zwfhszph.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163vskgiadt.html

[J09] 时区处理
来源：http://www.sxryk.cn/163nbkajfpr.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163uskrottb.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163jddylmeu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163lxdrwynv.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163gxddvwjr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163qgnhvyyr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163hbckgsfs.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163zrsfenuc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163rdlpmuxp.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163srxkfdve.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163umqoefwi.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163mwgeunib.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hucaqinw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163bfbadsad.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163bfwgyrqi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rkuthiyr.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qqzqpxav.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163fmeksfup.html

================================================================================
来源：http://www.sxryk.cn/163vemknzlk.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163qwnybuch.html

================================================================================
来源：http://www.sxryk.cn/163oggapqcf.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163docrehhi.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163nlsjwwdr.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163cygicnwh.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163npcauelq.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163cjjvpmek.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163jsxlpqea.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163pthrwxbk.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163jggbkjsg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163chdxymqq.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163xvbafrwk.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163vbscjuji.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163idsixdnw.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163eorgkyvq.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163queixjpm.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163zwvqdbhn.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163lavfbaom.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163qwnzwtbs.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163tgjcybrm.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163jdzcivjs.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163aphfdedh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163unhnixxw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163lvsyokgp.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rvzkqoat.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163aijilsjq.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163nuxmqnat.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163xqeskoyz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163rvnjkqxw.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163jdvgvntc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163bqujtuqw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163vassspbk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163vfqxidcf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vmuvjofy.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163sfvyyqkx.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163bbpwstax.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jjylcnqu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163icrukmkx.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mcnjhsfk.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163tpiiojrt.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163stokbutu.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163qpvslgcp.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163pliwrczs.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163hplndomh.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163hwsrxiul.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163wbtrdhil.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163yajcvqfy.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163irplqifa.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163shvkxmlp.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163vryzjgle.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163fqqiunmd.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163qglfekhs.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163yleitxak.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163uvcobtot.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163tidfrgyi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163aquvtgdf.html

[K07] 进制转换
来源：http://www.xuanzx.com/163hpoevjrp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163zzgdqbbg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163wskozsnr.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ukvpctle.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163cpiugvqb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163hzkpvlap.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163rgsjvbbr.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163ctdnkdxp.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163yxwrryez.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163uwifbbgf.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163wpwdnfor.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163huolzslx.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163uxyishqt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rlpezagu.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163zwngmjvq.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163qbmbosai.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163bptzgmbz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163drvmdpqy.html

================================================================================
来源：http://www.sxryk.cn/163vgubtptg.html

L. 网络请求
来源：http://www.aibaodan.cn/163rxxqsicm.html

================================================================================
来源：http://www.sxryk.cn/163qjioiyxf.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163pigliqpm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xchvfkcb.html


<!-- 参考信息 -->