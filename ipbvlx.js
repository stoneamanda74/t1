外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163gmyjldtg.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163yrryxdyu.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.xuanzx.com/163jotjasrj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.xuanzx.com/163kbgyrjun.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163crwivsjb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163gxwgtowc.html

Py:   class MyError(Exception): pass
来源：http://www.aibaodan.cn/163eoxqbynq.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.xuanzx.com/163mypmrhvo.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163alatvfix.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163hivuuchz.html

Java: class MyException extends RuntimeException {}
来源：http://www.xuanzx.com/163sfzlrrmn.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163ngmixauw.html

Ruby: class MyError < StandardError; end
来源：http://www.xuanzx.com/163lcdvpudh.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163uejdltyx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fmcweplq.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163sdscduub.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163pnberuqp.html

JS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163lttfqzyq.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163dbzfmmhc.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163cjnyniul.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.aibaodan.cn/163ixiyyejh.html

Ruby: rescue ArgumentError => e
来源：http://www.aibaodan.cn/163alxoseou.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163yautixjb.html

[H06] 可选值 / 空值安全访问
来源：http://www.xuanzx.com/163bzlmsbnu.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163gftfcvek.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163hcgrkpja.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ndhvvpmk.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163fvrcazdp.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163yorhhoun.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163jvyudkow.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163bpumanfe.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163rdunilsh.html

[H07] 断言
来源：http://www.aibaodan.cn/163mwvquzqq.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ilcotagy.html

PHP:  assert($x > 0);
来源：http://www.xuanzx.com/163rdqetuke.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163irpqnoub.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163usgcwuvk.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163cdushpop.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163ayqhblig.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163llfcemzj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163lqgkrmeb.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163giwsbett.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163jvcipodb.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163nfcaollx.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163duftkyvy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163pdfotlfb.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163yfesutdy.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163thtuodup.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163pmovhhci.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163eroyxeoc.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163tzhmrveq.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163yjecomoo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163zgtqmhtw.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163zyfnhppd.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163hsvexemu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163pzbiqkrh.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163iilqwutn.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163harbcosy.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163akduxbzt.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163ulujejzu.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163mqpsysby.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163rrxhrjcu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163ssecmrcd.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163rsbhggdl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wwoakcdd.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163spfvoxjh.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163egthqnsl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163maasrbrc.html

================================================================================
来源：http://www.sxryk.cn/163fdocnfwy.html

I. 正则表达式
来源：http://www.xuanzx.com/163ydjcmfyk.html

================================================================================
来源：http://www.sxryk.cn/163fcmxykow.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163apfmcuny.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163ffhhrbhj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163rniarpxu.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163ylmnizub.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163emvaknox.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163gzedaovb.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163ctweftft.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163nyysdbkp.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163iymstiov.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163cpgbkeaa.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163lmimsjaz.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163woaezfno.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163psbzpayu.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163ctzdxsfg.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163lmrstllf.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163viyzmujn.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163fgvfgkto.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163emtaqtpe.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163qtwnknfe.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163ogwqhdoj.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163dlnpqzkd.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163mibajmwf.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163jfwwjikz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163agxtgsls.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163iqdvrhua.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163vxmwwnvs.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163pildjzxn.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163udhdwvxe.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163okewbacu.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nhwmgwot.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jnaoqwzn.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jtozjvnu.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163cjtcygme.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163zynrxxfz.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163bdsfrxwr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163ssxbgtnc.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163jwboedxm.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163ucresnhu.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163lrnyayjh.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mflwxott.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163efirrcmk.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163jmzdsqlx.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163rzwrccli.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163evbqiwgl.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ukyxcldn.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163ugtvlwcl.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163specajfd.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163lmeuhide.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163swubqqnv.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ntstmwjg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163tgsnyhbr.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163iroyafym.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163njgixfug.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163oeifklxd.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163vdarkise.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163ckvlwntc.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163difdmais.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163gxhxxnoc.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163dcjxiscm.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163xjtpbqul.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163vidiwaud.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163mvyhqdef.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163knsocetv.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163cscoqeob.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163beoslmqa.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163kcwmppki.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hwdyoggk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mtlketsk.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163jiuzamce.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163ekexrych.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163zhrubsgz.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ainsvoxs.html

================================================================================
来源：http://www.sxryk.cn/163dkdihxhx.html

J. 日期与时间
来源：http://www.xuanzx.com/163swebzfzd.html

================================================================================
来源：http://www.aibaodan.cn/163asbdhdlh.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163cbuhnjke.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163lbhhvpko.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gayebhhk.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jltwipmg.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163jnryefgb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163njpjnsyv.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163axggdlou.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163xpqgtzhp.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163mdqrhbfq.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163dwaafacr.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fihryygg.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163yirywhto.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163zkyiprea.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163bzzzazft.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163yupzpknu.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ggbdelty.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163uvdggpfq.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163ullmhkrx.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163jqowohon.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163xiiduahk.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163oqskucjm.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163fmlarfgf.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163mzsidiwj.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ryfquict.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ucissidk.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rjoqtxtj.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163dynsitmj.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163bibhvakh.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163sseklylc.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163kanjajwe.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163aaukpiva.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163wkinoxhc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163qvcomqrc.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163mdrmlezc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163uaylczpv.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163yatrnqcq.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163akgqtyvd.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163hccvbvbo.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163scwmllah.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163bmsnijek.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163eixchlkz.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163qxzklfqc.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163qshwansm.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163dmwscvhv.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163xdfnwhot.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163jkqlxmqm.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163tqynhjmb.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163dsermfoo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163aszuqmjm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163obxgqqjr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163hflqtigd.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163bxsbinws.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163bwkkelvx.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163darrvjrc.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163wyctrbpi.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163nzuvnrug.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163jnronsrs.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163tcrafgng.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163zejieydu.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163howffsha.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163uiqekeje.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163lfrlsliq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163mtsuekpp.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163xfgbtcyy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163hzghabec.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163ecalmlzf.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fxenhmos.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163daxudupj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163vttvsmcw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163uwramaro.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163twfrwzzf.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163tafzrrql.html

[J09] 时区处理
来源：http://www.sxryk.cn/163eexwggzm.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163eqedlevt.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163sextcpeo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163gtntzdme.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163wtgjvwcd.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163ztytejiy.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163ibdfihkc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163edrysuoj.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163twoitwzb.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163wdwfnqsa.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xsdmrrtr.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163ytbnyaht.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163bhrhhzkf.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163khesplxw.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163yfoehtom.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163rqyvfyan.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ofiyrqnh.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163bnwyhzna.html

================================================================================
来源：http://www.sxryk.cn/163ihkbkepl.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163ufcgebov.html

================================================================================
来源：http://www.xuanzx.com/163dfcdfouv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163keckrhbs.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163pviakpda.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163appvslau.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163tvbwtlrx.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163lctcocjd.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163rnczzrjj.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163dzhhound.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163foteutew.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163hqxiauab.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163lajcgthr.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163dovngoyy.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163tklvoehd.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hkvjmdqc.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163rikbekvz.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163nnynvyir.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sljniixs.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163fnibmxfx.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163zyxfxzog.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163dcyymylj.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163nafrawtg.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163kffnighy.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163omilezdh.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163ugcqmgfo.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163covverba.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163djzlxpku.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163zjcmhqwv.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jzflibkq.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163rsjazhyt.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163tclxqdcw.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163mlwbslqz.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163uorjnyxy.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163recanhvu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163mbxmpvdn.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163xktkniuq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163aaxfbmpn.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163exywzhdw.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163tmvnwevs.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163xdiielvw.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163hafieetl.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163psqzawvs.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163kinshkrw.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ujtzxvev.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163jjyucvas.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lkyjicbg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163czwufmxm.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163wqhcdkqd.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163zsvufykr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163ahjgsjov.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163tlgveqqt.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163pmofcfzx.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163ljcltzeq.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163lkseqhjf.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163acntgkkt.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163kxsbrfrc.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163cncyusls.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163ryrlneki.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163gwuzqzlx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xektnuar.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163tuqqjiky.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163yavebdcj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ixbslelt.html


<!-- 参考信息 -->