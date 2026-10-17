外链999!wailian999！

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163darkbteo.html

[H04] 自定义异常类型
来源：http://www.sxryk.cn/163tpmhciny.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163amvtaeag.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.aibaodan.cn/163cdwfqidm.html

JS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163dqisobit.html

TS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163llzlhpid.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163chqitifb.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163cpivsixf.html

Ruby: class MyError < StandardError; end
来源：http://www.sxryk.cn/163ycwqiawr.html

C#:   class MyException : Exception {}
来源：http://www.sxryk.cn/163xnnrugmx.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163fbhzwvff.html

Py:   except ValueError as e:
来源：http://www.xuanzx.com/163sjoremfd.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163vnwbvbpa.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163jhqussve.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163qeoufrbn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163aerwcocq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163chugqvxu.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163iqntfxrt.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xxnqtfdk.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163wvcajekk.html

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163qoonhhbw.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163isterbgb.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163ryrvxysa.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xxxbwqvh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163akaujjtw.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163aiswogsn.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163jbowzhbm.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163myzszyhi.html

[H07] 断言
来源：http://www.xuanzx.com/163rmkixdyi.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163wuikdasr.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163agmhpskr.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hzbtucaz.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163ezoemhsv.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163fjrjfwsm.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163jnmyzamf.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163swmnuuin.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163xnfcayhl.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163grniywsj.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163ryyjuowy.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163lpzdyeuq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163ozwsdgzy.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163kihhpwrc.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163llevverm.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163uowqzwkv.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163rlibboxl.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163rplcqiew.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163ozrhqeft.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163ifssuqwl.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163lzbjxpjn.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163kkqhjuhl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163guzyxstz.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163zvcwnsnt.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163ibpvsazt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163guezqauw.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163bulgkjzw.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163sbklmawo.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163gsztdbdj.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163vuwbwxlw.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163nmmnhrqv.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163zhpcfgcc.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163pdcvgvto.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163enbcaxoc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163okeiqdie.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163iopjmqav.html

================================================================================
来源：http://www.aibaodan.cn/163iybnuoxp.html

I. 正则表达式
来源：http://www.sxryk.cn/163cozwzkco.html

================================================================================
来源：http://www.aibaodan.cn/163synmnjtl.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163bnavvkfe.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163oyqrcgiz.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163higvhgip.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163minrkffy.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163xqcpldss.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163pzgwlqgt.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163kbgzqzcu.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163tycjqson.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163hitzwlbf.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163knfkiwkw.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163lhqntpxv.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163psjusmcd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ovpqpaug.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163klstdlyv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163fiifmymp.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163drffyleu.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wpzcmyuc.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163gykorjdl.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163osfaeopn.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163otnizyrb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ilwytlcs.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163qyjrpdou.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163hxzfsuhz.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163lxfoqgtx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163lmoarmyu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163kzkoeyiq.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163ebyucpnv.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163ivlqlrzq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163rkrsewqr.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163hpwcvzam.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163mxvajhak.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163alzymfqn.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163ktvfjcqy.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163eorzvlex.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163vhaviznv.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163kwynimyp.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163vodmyxzb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163pnuqkjdg.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163adfmkwao.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nyummbsf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wghlpknd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163nxbdukpo.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163gzfxydab.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163wlruocns.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163slzbnfwf.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163lwdlxtxz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163mtxotszf.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163auaswcdk.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163nreotnqy.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163rtwieqez.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163eymophcf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163kevgelcm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163umbaqqfz.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163henhvvxs.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163tyfugwrt.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163vxyhupbq.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163cohcetib.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163qvxewtui.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163fzzahekj.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163ykviaowc.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163lfsbwvbj.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163pjcfbjcn.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163cvfpifqb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163vkegqaau.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163ujdhfhnh.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163rgowwrwc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163yhaoelwa.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163ddrobmrn.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163wjjqpqlr.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163pcuvglnb.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163sjbfanmn.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163luztesey.html

================================================================================
来源：http://www.aibaodan.cn/163rssvdrds.html

J. 日期与时间
来源：http://www.aibaodan.cn/163ojwsqebu.html

================================================================================
来源：http://www.aibaodan.cn/163nwqsgywq.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163lurgsxew.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163qowcvzhf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163gwlmeutx.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163xgyyzxvf.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163cpqbrjpy.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163iysmslhq.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163baybimwp.html

Ruby: Time.now
来源：http://www.xuanzx.com/163vuyppzrj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163flzfqjgp.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zmipsyum.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163sxsdribd.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163xtkcguhh.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163uvvazgsh.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163rfopknwm.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163fjyflyfa.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163komitbuw.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163tzkjrezj.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163unydbzzb.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163wzorvqgx.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163drmjdgzz.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ilisyaaj.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163rutwxram.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163cglvxlbm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163rcidmhjo.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163lykyzbum.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163ofchentn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163shbxlphp.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163zxsgbfka.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163gfdufupx.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163gxtgqpzz.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163yxmwejrq.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163efomiqzs.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163nvmcqxdq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163fuiofnhb.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163gusvrayy.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.aibaodan.cn/163xrmexjck.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163ajkifarg.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163rkkanmfm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163jlglhfbv.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163mqfgfoeh.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163ryyavncg.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163hawvfgds.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163pyzocglm.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163jzvapdya.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163luvhxarg.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163wlfxqnbo.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ovrmbmtv.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163eyqfxoxm.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163mbzckyew.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rglhxlas.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163jfpiexom.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163xebzzdqm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163jowqgshw.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163kxrzgklm.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163cgnwjxat.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163pyjtmiog.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163makrdgxb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163fmsjsziw.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wgcdbzvg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163cpnlhnoo.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163bynrerba.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gemshfbm.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ffmcasxo.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163pbcxwpkb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zxdzmhkn.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163meyywngq.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163ztejqmyp.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163oixfaays.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163deppnnud.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163sxtlvfij.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163lnjgvnzw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163hytnwxvr.html

[J09] 时区处理
来源：http://www.sxryk.cn/163aqmujzlj.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163nxonartw.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163maujpsxf.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ahtjeyxm.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163huscrzfv.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163thirfrsr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163sbvkcsgd.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163pnujabwd.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163hgtrfwyy.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163mlkthtvi.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163wxioqife.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163dkzaklar.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163uqycrqus.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163slcigimb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163wnkbuzfj.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163cqjagpgi.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ljznezeb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163eoiutmri.html

================================================================================
来源：http://www.xuanzx.com/163bbkmlgbw.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163gybfbkpy.html

================================================================================
来源：http://www.aibaodan.cn/163pkzcsaxr.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163yihfgkdp.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163qvtqhrzt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163vwnwddcf.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dwzwkjxv.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163pvjfdjkm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163vzdmsevf.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xjbojeek.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163hddskamk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163ygbcxloh.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163vvvywduu.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163qlwzamoi.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ndznsqdx.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163fvnluqic.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163wzattpse.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163jxxutpaj.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163gpgdmeyq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163euxhobga.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163krvmunuv.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163suxntblb.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163zkmybawb.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163kidvcdng.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163wkfrhgbd.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163zjidpnpx.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163teesfbfc.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163tvqoyeqd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163zooqqwwr.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163pwsmdsnn.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163kiptbgfo.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163wavtbkut.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163uwtgfzwo.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fmqdtmuk.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jzrkjoul.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163cwrhtfan.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rynktppt.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163ldcrerjq.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163izwqiovd.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163haupdeza.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163hsmwdziz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163owgnzpcp.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163badfegor.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163hzlmgslx.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163iomlogfw.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163gufaxjzd.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163msjtficl.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163awfthmrl.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163zhfwzosc.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163aajtrbpa.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bhwosqeu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ajjopunl.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163wukuvxvp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163logoxfyy.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163jxigplxw.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163wdydlxkw.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163bnsnmngr.html

[K07] 进制转换
来源：http://www.sxryk.cn/163yajwbfmp.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163mxbdywwx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163wtvgqptl.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163whqksawp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163dolwsrsu.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163chflhhbb.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163wjjwtwrs.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163hbntcqnt.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163hsgygehd.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163uzwvlhkm.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163bpisooaz.html


<!-- 参考信息 -->