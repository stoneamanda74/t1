外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163jdktfdgw.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163yyhmdvjf.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163vbbmqtxy.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163giynzwaa.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163hxwhgxhf.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163acedixrv.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163stdasmwl.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163zdiqaeko.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163obmeqtpj.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163oetlsqwz.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163nafclzvp.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163qpxongeg.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163xwododbk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163qkkrfrxq.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163nvykvigg.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163gdioruxo.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zlmxwptk.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163wktkdidi.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163pmljoxgr.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163vphtbqun.html

[H07] 断言
来源：http://www.sxryk.cn/163snjydnfm.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163nbhlztgg.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163hkxammja.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163clxqqqfz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163oyragpmy.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163htxtynvf.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163rwgikxsq.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163rellvpdy.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163bcwmfsop.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163orgoltdv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163qvrugtmg.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163zlnfjoeh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163finhzvbu.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pwyziuml.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163cckdsgko.html

Go:   err.Error()
来源：http://www.sxryk.cn/163qtkjbocp.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163kpmbioop.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163gatiwazp.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163aaaefuhk.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rzuetchm.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163wftkxexk.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163zpyhpjyh.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163zgewoone.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163utozasxy.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163isjeeump.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163rmpbixyo.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163fqlaxvjj.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163cmszqbls.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163qdsytpav.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163jmlwklwg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163mhryphbd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ziynkvfo.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163dhoaxctf.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163bxkdqqsb.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163clxqhosy.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163xpifojiq.html

================================================================================
来源：http://www.sxryk.cn/163hwoseoxo.html

I. 正则表达式
来源：http://www.aibaodan.cn/163gkmdkorg.html

================================================================================
来源：http://www.aibaodan.cn/163emanioyh.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163vztybdrn.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163bfjrnaqi.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163wlsqtnni.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163ynkfpzla.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163rtratibp.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163oibnaqts.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163oxjmbsqh.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163bmqjxnih.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163vjpksodc.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163jkgqlfde.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163yjyaslvf.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163vvmeuwwl.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163trrqcgnw.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163qbpddlph.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163iaaakuex.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163obwvfznr.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163gjwgdfrz.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163qehggqhb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163oraaincc.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163mzvnqjsc.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163fhfiawgd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163blavjjiq.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163kfvtgigf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163gyylcoov.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163wgdtehbv.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163sxyncpth.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163cvjneteo.html

[I04] 正则替换
来源：http://www.sxryk.cn/163jrpmvvpo.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163rtfkpllg.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163zgyaeloh.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163takypapl.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163yasbwzpt.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163wcepetrc.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163anpcwetg.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163epulfdnp.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163paxhighz.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163cgdmqvlr.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163xksrdpgg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163trbfrsuw.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163ijknhgya.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ezewcyco.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163xugnmtra.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163udvfhzui.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163qosdqvqf.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163wxqfiopt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163fvmmumen.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163piowhcbq.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ohaglrdh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163xiwuqakf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163ayocytkn.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163txlzlxoy.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bpiemgat.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163dayzufrb.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163xqotpxpa.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nyizpnwj.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163wvnixync.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163gwrwvikh.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163tblshlpr.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xqcssuue.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163krwdfxuj.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163dirodirc.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163qckfwqpk.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163fobyxrtm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163alrtmhst.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163romtjadb.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hehrirtc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163nidrtcai.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163wefyjqxh.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163ihfvyibt.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163rtzjnkbn.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163gjoirzwa.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163clfezlny.html

================================================================================
来源：http://www.aibaodan.cn/163rjidiahm.html

J. 日期与时间
来源：http://www.aibaodan.cn/163gmlubtuy.html

================================================================================
来源：http://www.sxryk.cn/163jzznhzhz.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163rihmnzjn.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163aqwerpiv.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zocgrxko.html

JS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163nujytulo.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163hdfdtdbp.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mncsgxgf.html

Go:   time.Now()
来源：http://www.xuanzx.com/163ipqeqrhb.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163exmjqnmn.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163ohcvjnec.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163yywlrzze.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163szdpgdej.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163rumrjjne.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163zkxzdbur.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163kxmeoivj.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.xuanzx.com/163gepoxkmm.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163bzygfzen.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163odveczdm.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163gmpsbjly.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163jbgzgzyo.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163cldhfkse.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163rhuyzrvt.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163nlppadue.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163iehgonwz.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163pnbsuchh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lszbakji.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163szxgwsco.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163furpmuyt.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163swjvvryu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163wbctsurd.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163gqaddcgc.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163doonwzys.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163skodrouv.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163jcheegzb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163wdnonulg.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163zqffzhrm.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163liuvigfg.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163naogcegh.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163ytlvnwai.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163faplkjvx.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163wnxtfzcm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163rlrbhgdc.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163xabruvue.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163zsbctaro.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163xdjxcfye.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163hlgphjwm.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163zcppgdsc.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ectuwlub.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ghgeboiq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163qgpdbpcb.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163kytmwpne.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163gfwcpkms.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163wrtibhwp.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163oavebrxs.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163bjfiaszo.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163oehitdte.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163wznhlzrd.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163cwrseidm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aagbbunj.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163nxebsugq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163ixgcqlng.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163kzvmvaed.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sptaezij.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cgdkcdpo.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163aqxahhxy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163rhlyazwx.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163klvtaccp.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163hfihujbf.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163wyrmlczv.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163dhhlkwyx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163nynrsbgu.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163wljkjrqm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163btrnjrjj.html

[J09] 时区处理
来源：http://www.sxryk.cn/163iawklnll.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163vovndjmp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163ucyfczqu.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pnjxlsxa.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163fuokizmy.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163iabpweur.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163pryfpajg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163ymkzbmcq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163rxlmmvnh.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163jjapdbko.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163tlsyqghs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163fuxsklbs.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163ucoblbvw.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163ecvozrrs.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163ovfxmipl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163jqwprkwp.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163xlrnebax.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163uklppgeh.html

================================================================================
来源：http://www.aibaodan.cn/163ahlsldsf.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163qpbtbsfq.html

================================================================================
来源：http://www.sxryk.cn/163fveaxkpy.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163puxlzpiu.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163wbjzrlmu.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163gvywaqtf.html

JS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163weiigral.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163hcgwbatu.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163wwzlsgun.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163tqnnsxwp.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163djqfmrkr.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hnrvpqrc.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163lwdhgzfa.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163eztpldmp.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ckjmrxfp.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163twtzbikn.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163kkihtdck.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163cackwiyz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163mjbnzkdj.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163arsouhgy.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163grkpxawf.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163lrrwpmie.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163dzbwrnfe.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163darycpgl.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163dlggtqkf.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163ndgrmjsy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163dicjuyzn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163unxuoydk.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163bmpwelzq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163tolangad.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tzcwcajk.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163vweninnl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163qwenhjeh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163aufsfnxc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163agxsxnfr.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163eeotphyk.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sbchmucw.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163jahdgtxt.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163vvldmomz.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163zluwdzwr.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163znygeaur.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163owspfzve.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163chowdguu.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163mdyomzsh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163tejzidqj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ijdyngfm.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163pqalbalg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163bxivsipy.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163cjxqivin.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163sgphhjta.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163yjvhiald.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163xvujtidx.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ofmhfagl.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163babelsnw.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163aigbsulx.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163ijoyeezw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163zshmhtas.html

[K07] 进制转换
来源：http://www.sxryk.cn/163fntfukod.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163dczpoiug.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163riftqbxx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163wtiishaf.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nqltpytq.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163ebjonhyl.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163mrelgcfh.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163sbqsbhgj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163jsypkqxz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163lqkifqkh.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163evxscwnj.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163luzrrlpc.html

JS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163vkjfywzt.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163humwmjel.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163qyxvakfn.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163vgyjtqlf.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163aalbwqfm.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163rdglvpme.html

================================================================================
来源：http://www.sxryk.cn/163fwfamxko.html


<!-- 参考信息 -->