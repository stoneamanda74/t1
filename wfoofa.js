外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.aibaodan.cn/163mlgcuowb.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163xhhtlgbb.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163pueuidjp.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163scuxjqcu.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163zzvposdx.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163whzptotl.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163cddrclsl.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163ancoboal.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163yebqoahk.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163eowmhuny.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163dzhwfqhn.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163szhxlevu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163oxeukioh.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163hwgqtmiq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163vbvquwju.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163rmmmoqao.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163otfxntve.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163rnpysozp.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163hysltxwy.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163nzqxoavg.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163usaheiqa.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163wzfjihhb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163euuylbqk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163npkmtelc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163ztpcwjbg.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163dzfbcptf.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163arcxkebm.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163lpryulyh.html

[H07] 断言
来源：http://www.xuanzx.com/163snjllywr.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163aqrtqcin.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163lrlvrrix.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163rhwlqouf.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163gbwavwzd.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163szqcinvd.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163hdccbitn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163pwptzekm.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163fvecptlg.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163ylvaupef.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163rnpeynrd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163kdnxpwbw.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163toqtcapl.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163dtxlplgt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163cacezlvl.html

Go:   err.Error()
来源：http://www.sxryk.cn/163wrdrfbkx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163crhagvph.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163qsuxichl.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ofjvpxlt.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163mmvgmiru.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163yatpstnn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163pkjldyas.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163jitvmenr.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163cmnvzctm.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163lqldndyn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163gmoeqdzh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163cfpcusjg.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163iyytmlix.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163hrawphmv.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163olhdistw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163damimcay.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163uovttxxu.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163ctupwdrh.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163ocjwitns.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163wfmpccdb.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163vkexqxee.html

================================================================================
来源：http://www.aibaodan.cn/163scpmkirj.html

I. 正则表达式
来源：http://www.sxryk.cn/163psrryjua.html

================================================================================
来源：http://www.aibaodan.cn/163jtvbtgqa.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163hbmnjmyc.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163eyxdlunc.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163xgqpdkxc.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163tarlqxhv.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163eeoxxncr.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163lohnkfgi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163yhsjcxwl.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163wztyjtmj.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163hizhiati.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163ijqawnmb.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163jigtsdwv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163fikogbyi.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163iiishena.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163zuutyxct.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163vorbrtxh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163ngjdgizq.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163dwxusopq.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163yrzudiox.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163fehqnlzb.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163rzprddks.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163kymenheo.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163epeduuzx.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163misoejgb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163yfulhksh.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163rlntjnwk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163sdyplzhw.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163dbvldudh.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163eghbigrw.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163zhpeusan.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163iuygvyla.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163wwpegery.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gykdggux.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163srbwikvv.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163eserbavv.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163xcnffhvf.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163jsruygxo.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163yikmmksq.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163sfdoxlsb.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163ztnvvwiu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163gmnddenv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163xpzkssdb.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163zyakgzmf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163xoigkvtw.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fqrmwmua.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wiwjkgqp.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163xmcrhknh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163joxrlokb.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lxqglbcl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uttdchat.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nyexevze.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163hpibbubk.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163wtejhzig.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163efsdidov.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163gviwlrkt.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163vshihcbg.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163laufaixr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163ibzioasi.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ifwjruwv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163awybwkua.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163kszcvjbq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163vfxdpngu.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163lfhswmcu.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fhtowpmj.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163ixteeriu.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163rkmxtves.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163zwipmctr.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163zvikkjfc.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163hrumuomb.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jwgooqvp.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163gjhndfug.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xrouvlct.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163fmoewffh.html

================================================================================
来源：http://www.sxryk.cn/163eyqajduz.html

J. 日期与时间
来源：http://www.xuanzx.com/163vncwschh.html

================================================================================
来源：http://www.xuanzx.com/163cqzvucmq.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163dypywayz.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163fbcnvfds.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163gatdrisz.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163ehppuunl.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163iejlrnza.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163cutzique.html

Go:   time.Now()
来源：http://www.xuanzx.com/163oevnbnzv.html

Ruby: Time.now
来源：http://www.xuanzx.com/163oomigshe.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ccemtwko.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163ktqoixzx.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163icjqffjf.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xyufrgla.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163gohflpre.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163zmkconis.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163mgeolmma.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163mwvkseeg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sexpmmhe.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163zzweliva.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163hajkurlp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163cwygtmzi.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163yqaqwgdv.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163fchqfmkx.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fbltguix.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163zqsxlvoq.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163tpypokjs.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163wvdjuqza.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163khjfffdm.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163vsyxjzle.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ikgcbetc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163nwhgciqk.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163vkrgbjir.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163yfuirpud.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163bltgxmlt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wfjkdpso.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163evytxxmn.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163zzxebklx.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163psageige.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ufalrleh.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163nftxptzv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163oixpvgwk.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163proychdn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163vtlsfwzh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163tcdeuykv.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163kaxyreux.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163kprmtcld.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163iuaobhei.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163jiyltbxc.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163rrudeyqh.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163khxnoamq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.sxryk.cn/163nemmdhfe.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163pabtvmby.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163rbvxszin.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163onryzqev.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163jthsjhti.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163pvvciiqr.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vlamndwr.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163uugvlzfz.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zysszmbb.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163nhuufhwk.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163gdictqog.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163uytbagyb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163vaekqqpy.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mottpkfo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163twwsagou.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163qrjisjod.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163nrlmcsto.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163vtzjrnyu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163ibztgpth.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163nuruqacl.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163kyvmviou.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pclsomlg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163mfzmmcwl.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ahpmnmab.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163etbgqdyn.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163vhplgpew.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163gpmtvyiy.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163mpeurlng.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163kepsurik.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163vvgmdcyg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163yqjnatit.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163sdhecfot.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163waflkscx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163uzvakpbv.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163evxkrlva.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ogcmxodq.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163xxsjxvtp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163mpsinixj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163xhemdocz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163wbutnnsx.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163tldnillv.html

================================================================================
来源：http://www.xuanzx.com/163dvtzfcqd.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163lfsdtuwg.html

================================================================================
来源：http://www.sxryk.cn/163athqachx.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163bbapwlsg.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vgjpxwlk.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jwdkkfua.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163deqxcxtf.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163pgsnfykq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163voyvmqqt.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163rvenmytn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163sowkctny.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163tekmojww.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163wlgydetz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163nckcdcni.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163eqleazjy.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ixfniwug.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163tnhbpnjz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163qgdqgfps.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163yrpovxxp.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163gmlvdvgi.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163tvgdurkj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163xsnqivzx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163ovdsdkht.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163grqmhsoi.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163mlwywqbz.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163aktzukfp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163uvhqknag.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163pawqinuu.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163mvulznif.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163oeqxckgf.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163gwqyorzn.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163dwwrigts.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163wpogfejp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163vkltjies.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163auqvaywd.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rvzasbaf.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qjcomose.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ojblzxep.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163waaynthb.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163wiswgjfi.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163caxyvirj.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163jphczkwh.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163iikljqaz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163gcrvagub.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163luatnudd.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163xwwwgakn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163bcbqnsar.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163qmalwjjp.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163uzxqfiom.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163uxqyfobr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163oakejnzc.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163djbldjnn.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pmrhuqru.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163dtcftetb.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163umgnyeea.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163vxhwzoox.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163szcwmrjr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163comrfkzd.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163smoivpkm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163mavfisfe.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163kmawnyol.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hjzfdtvh.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163eocbornv.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163ouvprhwx.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163fvhmtamy.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163goggtouz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163xtjyagau.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163uusslurq.html


<!-- 参考信息 -->