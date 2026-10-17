外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163lwadrlfr.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163lmvnkazx.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163bpvgdxoe.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qjxlspwu.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zsqtutmd.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163grzrxiqo.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163rpqshgvd.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163nrkkxeia.html

[H07] 断言
来源：http://www.xuanzx.com/163otgyqzio.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163zxwihgtx.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163sbnlatea.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163mbmkldfh.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163bwyvxlna.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163xsirwyfq.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163hkyunbor.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163rykglten.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163viohtesa.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163sginpddo.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163acwhflyd.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zlvjevzc.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163vqpqfagp.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163xnrbgrgc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163yharwgfy.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rddxmqcw.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163qagscffs.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163rgjsfyhr.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163rmkljwby.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163xrhleyky.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ftexxmkh.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163aoptrbbd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163iupwxuzk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hzsaxcsk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qrsuituv.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163uqbrabgv.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163vnejirla.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163vlqdsiyt.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163mhqphkcu.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163rnwiorgr.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zxgzgyqq.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163limoolhy.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kzkjbeqz.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163heqgqrxl.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ukaoyawi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163mxxgnvrk.html

================================================================================
来源：http://www.sxryk.cn/163egummuvz.html

I. 正则表达式
来源：http://www.aibaodan.cn/163gnvbbijf.html

================================================================================
来源：http://www.sxryk.cn/163linacfjm.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163htngdjrr.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163vgcfzrks.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163vhcquzsj.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163habpzink.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ckujmkwv.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163hzokvfjd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163rqepwxqh.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xdsegmtq.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163aibbdiby.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163qhaxhuav.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163mwjpeeap.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163vjemigxc.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dagaqqjp.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163fpxkuchh.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163mwddzoyf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163jclhmmfm.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163qchfagpx.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163fjxotzda.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163uqxphhpp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163nftrfkfe.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163xqaebvqf.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163sffvesqk.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163lrqvhdiv.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163clqowvah.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163hclhxwsv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kerucmjg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163rudgdktt.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ojffuwqm.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163eegjvtvg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163wuogkhja.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163qwhhtgya.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163itxsxsav.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163cwbjcvna.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163haniuynu.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163ojnbflfh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163zaxcqukh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163zvrmuwkz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163zvqnghgv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163rvxqsicz.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ugsbtymk.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163zvnqvdeo.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163hhfkrfta.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163mufvttdc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163rbdpenxf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xvuszgvl.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163sxslapxv.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zlbhjthv.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163jvzwoeot.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ewfcwjlb.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qyjdshbj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163jsysjzkx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163gcszobms.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163smatsuzs.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ghrihesc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nczwrenx.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163pyzvobib.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163gkmjrrgv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163aiyehmek.html

TS:   /error/gim
来源：http://www.sxryk.cn/163inuwdwvp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163aytdrmoo.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163oofnhizw.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163jildvfuy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163xvfyiifa.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163qpqnorjk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163rratnojd.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163fnbermxj.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163npdxltwm.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163lyeesbdw.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163uecbhrsm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163wrlqecxj.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163plwzgbto.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bfxnumyu.html

================================================================================
来源：http://www.aibaodan.cn/163qrwburmg.html

J. 日期与时间
来源：http://www.xuanzx.com/163klvzlvoc.html

================================================================================
来源：http://www.aibaodan.cn/163xsjwosad.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163kqnaqsmp.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163fbkzeoly.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163tiokllkx.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163qngrhlgj.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163lyylozqq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ypedbvfd.html

Go:   time.Now()
来源：http://www.xuanzx.com/163hayedlot.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kgmcmnlc.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ikhatzde.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163ycrhtymg.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163illsgbbk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163uuuhshzy.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163srqazkna.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163emgfhmps.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163lveisdxr.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ewpigvps.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yksmjgqk.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qrsuwsdg.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163brshkmvn.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mlpihzgv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163iivtwref.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kzewlotu.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163dlxidpxo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fpgcparc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163bqqssfvj.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163zzfkrzlo.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163sreqbiij.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163shkbmyho.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.aibaodan.cn/163ndtkujqn.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163dqzgxghz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163jcspwfla.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163conspfcq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163twqpzwef.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163kmscjgtf.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163fzunclvq.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163vrafxluo.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lylasvhj.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jswhulwf.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163cwfluhbu.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ksvonuke.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163gipzpktd.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163xupkgglt.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163javizvfo.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163lsvfqaad.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163jrcxuqxp.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fkgxlakl.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163hvmmdbgr.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163rpslqpdz.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163gmntbnlk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163wdgsotyr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ljsvlrkl.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163pfygbrgg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163gpmdqnmj.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163ywjwyhie.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163rbyzzbsn.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wbsnznei.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163cntygnaw.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163aqppmizq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163hueggxzj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163kzgjbzhm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163jxahkliy.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vvxlmppi.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163xlokblxt.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163zbkdohcx.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163hoaadnqz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163kufdbels.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163oxittaiu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163bliqkjen.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163qhacahjp.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163fhosnhke.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163hfmetdfn.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163srvmrgza.html

[J09] 时区处理
来源：http://www.xuanzx.com/163uvsllcnq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163kukiampo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163gdwnqqwj.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163eisyzgbs.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163frkveaev.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163niployji.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163tvfdivxz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163fvrfmuop.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jxyskwod.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163nukrnnzy.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163decalwns.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163gwmwybbj.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163cglblyxb.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163neeyxuno.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163njxuxrgw.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163wxyiuymq.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163rdzsmljg.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163isovdoke.html

================================================================================
来源：http://www.xuanzx.com/163gabgjmbh.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163rgelvvcw.html

================================================================================
来源：http://www.sxryk.cn/163zpqjtwoz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163dromdotw.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163fxcoxsqt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163wfepgkpm.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163qrcijrvy.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jxxbppjd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163rirnesse.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163njfudfvb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163vlaohxsg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163bvkgaifw.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163ethajsni.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163tfwadzmi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163aaoynfkf.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163eqtzcbmc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tbydntnt.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163nrwnwosl.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jtoaydpf.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163pxddaoax.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163ehscsnts.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ljhemoig.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163kbhehrdc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163yrqkgpjd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163atqbpgtc.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wxfdrmvr.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163dyjqgunu.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163qdfxyvjh.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163imztxelz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163eipathxk.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163guavfbrz.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163widpzcvy.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163vtswqkup.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163wvuyxufv.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163adfnszth.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ltdauszr.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163akyiqiyb.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163xsxtbwpp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163xbbzmnsb.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163elocyaxx.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163wesxvugx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163kcmlmorl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ijlwndfb.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163bngbdxwu.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163txehhxyc.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163tcgksdto.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163qzclvwub.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163nmtbxvhs.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163srcbjesq.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163hhwhvpjr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163lnfavewu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163iyekqkao.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163izoxjaji.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163lxwqqtwm.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rnvfezmw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163akrnwleb.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163vwatxzen.html

[K07] 进制转换
来源：http://www.sxryk.cn/163yfwegcly.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163vlbsaltr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163eqmnunku.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163bajsiyly.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ljdbhcgb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163xibkbgik.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163jxwzcsel.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163wrtwgvwr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pyatjkfe.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163atrkcpus.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163dsfywwid.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163tjkrgmvj.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163aguykyuy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xvqlhrfj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rysejxyl.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163oxripnoo.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163czkofvla.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163unxxenje.html

================================================================================
来源：http://www.sxryk.cn/163iuzthhmo.html

L. 网络请求
来源：http://www.xuanzx.com/163zprohydn.html

================================================================================
来源：http://www.xuanzx.com/163jejyolfc.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163iqxgqjgm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163imfznmcr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dqhdrhcn.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163uodtzqts.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163hxmrgkvd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163lucpzzew.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163jnvemjlt.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163foljbaho.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163bkhgpcik.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163ifknayrx.html


<!-- 参考信息 -->