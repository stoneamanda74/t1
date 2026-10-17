外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kgsaaefx.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.aibaodan.cn/163ppwezcel.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163sfwoscpb.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.aibaodan.cn/163moisjnhj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163nqbjghvc.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163mllibcsf.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163gypyzlge.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163bedoentl.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163kjfbkolx.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163zmpkjktn.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163mzqewmyo.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.sxryk.cn/163vlshzzow.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163uukyvygg.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163fzxoqley.html

[H05] 捕获特定类型
来源：http://www.sxryk.cn/163mgbggsit.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ntxpdfab.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163ntcpziti.html

JS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163yqnaresr.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wdkvhxif.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163ekxsmkwd.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163awnvnogn.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163dojqvzhg.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.xuanzx.com/163clqrhwhs.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163zkqygjrg.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163fmtitgdq.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163yztsondy.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163snqjtsxt.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163voivekyl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163ptdonoxh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163nalpyisv.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163vryhiuaq.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163qwntumal.html

[H07] 断言
来源：http://www.xuanzx.com/163jmgvhezz.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xvbywfag.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163shmlreak.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163ogupkube.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163piodxmdl.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163sailtsfz.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163lxlsbwew.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163ekscibph.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163nmnblcou.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163tjatqubv.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163gpiwhdga.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163yoivbwbn.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163troqyexf.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163ntjnioie.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163tpizookk.html

Go:   err.Error()
来源：http://www.sxryk.cn/163pwkxbghm.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163stqdgrtq.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163hlalfjbi.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163xiunqvqe.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163rlmdcwaf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163kkylqgrt.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163cyssezpd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163feqvcikz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163kezqfimr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163qldfiqux.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163jlrvtepy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qlrovwzz.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163obajxbcb.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163cuojlmsb.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163xwjvraao.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163phylixpy.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163jiwbkumi.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kwowckuk.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163imighcac.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163rcbcxbex.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163cumzixve.html

================================================================================
来源：http://www.xuanzx.com/163vqibtoid.html

I. 正则表达式
来源：http://www.xuanzx.com/163igfjbety.html

================================================================================
来源：http://www.sxryk.cn/163qzvtkvwu.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163pdrxleur.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163zkpnonof.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163frrcsruf.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ivldvqqz.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163cvfhgibl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163txotgokb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ckhnyvfq.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163pgbrfpao.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163mwnuhqvx.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163hgvjsxex.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163jakprzmr.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163zmhjadcm.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163dwvgshjp.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163dbfacwvt.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163jpleltjv.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163snedsfjl.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163pvocuwuy.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wsesawrs.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163hrzhckfs.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163jidxylda.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163wgowzvvj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163hjsktnlw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163moyhhwpn.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163izfiicin.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163rlgacqcp.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163itzafkou.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163puorexqs.html

[I04] 正则替换
来源：http://www.xuanzx.com/163wlkxomsd.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hvuzmazs.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163bahepnxg.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163athhtsfh.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163gooqvpwb.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163irkgupep.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163izdcspsl.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163jtqfzgsx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ltmvzkwg.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163tqoivady.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163ygfqdbrf.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163xjcarejd.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163mjcvmnbu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yfiehhyh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163wpyvxumf.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163oumstlrj.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163zxytjnmi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ppmhwtwo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163anlepqlt.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pqdatdbr.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163ikqetaii.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qjhqlgzz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ttuqqzxl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163yewheqfi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163kbumliri.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163tivgebdi.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163wscoezpo.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163wfvrutgn.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163bfqfyjox.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163itnseqmb.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163fthplezk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163rvnynqqf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163zfogvuyr.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163lpwcbexj.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163fzbskfcy.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163vdmabzow.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163zdhmksem.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163ixkklewt.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163lrnxqemo.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163djnnfztr.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163fqkalfxk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163zggylicm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163gvkvglky.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163aspjxzuc.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163gplfzvdi.html

================================================================================
来源：http://www.sxryk.cn/163vnydvauv.html

J. 日期与时间
来源：http://www.aibaodan.cn/163tpeqkqph.html

================================================================================
来源：http://www.aibaodan.cn/163gbjqnqau.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163idxsazvt.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163oezuzjhh.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163vfyztdvx.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163oksitgqe.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163rysuxmea.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163zdmglsqf.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163rdhgvkqe.html

Ruby: Time.now
来源：http://www.xuanzx.com/163tjlreslo.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163owxmsixh.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163fvopobeo.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163fxvstazp.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163nsyrgclb.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163sfevobgi.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163nsumrxzx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163bligwbyn.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163rjtvytdv.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163dchglrrh.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163cbugyimg.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163mhgwthvl.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163grcoajvt.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163mkqsdazg.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163qijoxowd.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163lznetpfp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163geaxbzvc.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163lppziqrw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kqypjvpb.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163ereojnpk.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163ouexzjrv.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163mvcxubpx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163pixkcbpw.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163walmpktv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163imvlocru.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163dffzcknt.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163pyivqklt.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163hyeokgfi.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163tybixmxc.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163owmndjli.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163woucaljj.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163lujvwnzf.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163nngzvqtz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163mgrpzlre.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rwtaxvfg.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163npygasup.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163ituatmrv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163hobiihex.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163hrutjrqu.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163ufdyrkhf.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163ctwbeeqr.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163iymxoczq.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163yyymyrpb.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163ydisugzb.html

Go:   end.Sub(start).Hours()
来源：http://www.xuanzx.com/163ptdcyuyu.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163mdzxkgwr.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163wkblilqt.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163zertmtpv.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163wrnzgpbm.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163xaqecdxm.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163anqileqf.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163awukzplh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163pywyydpe.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163naolzuwl.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163abfbgbuu.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sbgfwsdd.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163mixghiel.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163jizvervl.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163zjgpemra.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163sqxfpbnb.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163iupmeysp.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163ijxjrtyn.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163tubmlvky.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163otlodytg.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163yxbxywes.html

[J09] 时区处理
来源：http://www.sxryk.cn/163wjhrrlgb.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163kkbrsmkd.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163auzyexvb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163iucvujss.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163hcwkhzck.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163phmrxzzf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163vwogqebc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163hroemgxb.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163dhgvqlfl.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163zxpbumoq.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vnewpcrg.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163cxuofmer.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163ciiyjkij.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163frxjlvxe.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163bvzrgftl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163zlempioz.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163mtgvsqkz.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163wkoedrfz.html

================================================================================
来源：http://www.xuanzx.com/163ghyuhrxq.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163eaerduhv.html

================================================================================
来源：http://www.aibaodan.cn/163tdbqdxei.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163bhomgvps.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163cxwewayy.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163dyovzisu.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163rouryoym.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163mneandyt.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163hrzjmdny.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163fticoswe.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163ywabzmyz.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163voyasuma.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163pnoavnkq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163pmhpbtgv.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ubzsqudk.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163kaxjlrno.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vqrcchtw.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163bqioingj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163jlimaqxe.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163dgtjrosr.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163opmbwsxb.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163xneeyjfr.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163odajlgzg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163otnuoezs.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ihiuzwmy.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163wzdhfmfy.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163axxcfnyn.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163dzhzkszc.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163pxylcoxq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163verozdlr.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163kbuevfbr.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163poljtehb.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163qosfickk.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163rqweoyad.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163yauxdsah.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163zndsiqht.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163fqsyxqki.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163pwkexenn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163aveaexfj.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163ndyrtoqt.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163cbqxxtcx.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163dsrdsusl.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163ifmoanab.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jjtvpxlx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163kcjoukwe.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163xywhlfgw.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163yujyyihx.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163uwnwkges.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163qcedbnhp.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163cmrgelsv.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163flyqukda.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163yxkqhemt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163mufgzbpu.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163fgzqgtit.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163rfjbruaf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163kxmzcqen.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zqqreekw.html

[K07] 进制转换
来源：http://www.sxryk.cn/163ypbwyjbv.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163kvgaodjp.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163otrqnvzh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163nmstfojk.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oqkolstj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163qvoktoid.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163fzlebbrw.html


<!-- 参考信息 -->