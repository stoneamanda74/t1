外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.xuanzx.com/163jadidqul.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163dxrlhtda.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163uslowhkj.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163wbvugoff.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163abptbhrb.html

[H04] 自定义异常类型
来源：http://www.xuanzx.com/163swikljvc.html

Py:   class MyError(Exception): pass
来源：http://www.sxryk.cn/163imisavnm.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163xgmbsnwk.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163wwsrilri.html

TS:   class MyError extends Error {}
来源：http://www.aibaodan.cn/163ggznczaw.html

Java: class MyException extends RuntimeException {}
来源：http://www.aibaodan.cn/163rtmthqlx.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.aibaodan.cn/163kjeqmfcg.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163avnlqyse.html

C#:   class MyException : Exception {}
来源：http://www.aibaodan.cn/163hayrnbdc.html

[H05] 捕获特定类型
来源：http://www.xuanzx.com/163rzyhwcej.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163ebdbzlxx.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.xuanzx.com/163uvmhkcey.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163awqyaztc.html

TS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163teqilpkt.html

Java: catch (IOException | SQLException e) {}
来源：http://www.xuanzx.com/163qrxbrswq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163xbmomjjx.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163fmfxiurn.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163hyzsxour.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163fcthkpco.html

Py:   value = d.get("k") or default
来源：http://www.aibaodan.cn/163mlipnnob.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163xerdlycr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163kdctzgdf.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163aptixqsc.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163zlravziv.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.xuanzx.com/163hviebcbf.html

Ruby: d&.dig(:a, :b)
来源：http://www.xuanzx.com/163npwvyroo.html

C#:   obj?.A?.B ?? default
来源：http://www.xuanzx.com/163ddkzazgx.html

[H07] 断言
来源：http://www.aibaodan.cn/163dzycrmsj.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163vmxkcatc.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163yvspmotu.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163hgcaesay.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tthxchdi.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163ugoueepa.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163gvrwzkvd.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163hvlpckbe.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163kdizgekm.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163tzvepcwq.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163hjmzlvez.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163uplxbggo.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wtkpdemo.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163mbzsxihr.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163baihxetd.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163tsnsgtfq.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163zpjktntn.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163cklpuans.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163rmvlclut.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163wulgtapo.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163irvhaqje.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.xuanzx.com/163bzlcpqba.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163sfkmrjvd.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163lujoajjs.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163rtyrzsga.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.aibaodan.cn/163vuzzbfjc.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163togiixsc.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163mjnhoeia.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163jgmoflpk.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163mfrqmels.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xpmwdays.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163obqhvczl.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163eojluefr.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163vgeobdmj.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ojrehsqz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163xplrgmqw.html

================================================================================
来源：http://www.xuanzx.com/163kvngghvs.html

I. 正则表达式
来源：http://www.xuanzx.com/163uivgedsj.html

================================================================================
来源：http://www.aibaodan.cn/163dtzxgdga.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163bsocpolt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163bbbecuoq.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163ardfvrbe.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163afmsjqrl.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lubzpiog.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163gplpzkyu.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163acmsutwc.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zctzhwbt.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163elbsoyxt.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163uaczwrhe.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163vaapgxfl.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163dfeccffp.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163yskbylpe.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163hhcqiixl.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163zievracg.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163afbzecuy.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163udzpxxpp.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163xkfxtimb.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163tsoyavxv.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163aoxdxqgw.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163kdlxmsyl.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163wpfrenya.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163nvgazzzs.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163yupibbhx.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163dloopbys.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163gvrbviqg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163mucurtso.html

[I04] 正则替换
来源：http://www.sxryk.cn/163kjvnbhaq.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163ngfftfpm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163nxkbcfce.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163sfgyweoi.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163ggdmxwmg.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163lvrjohxi.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yusaevhr.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163axhcmouq.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163neiovbrh.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163gczwkxss.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163cheyugau.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163ntwggssj.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163jondccxz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163yzacurga.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163zhuohpdr.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163yhikzhmz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163egohjehi.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163vpktebmb.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163zkcpkjtj.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163igwyczwl.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163nzvafflz.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ufgtkhvd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163slndjasz.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163cquakubs.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163elhogztm.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163niqfxues.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163fuihyirn.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163qrrlrnor.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163aaxejdpx.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163drwrherk.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163zrjubevh.html

TS:   /error/gim
来源：http://www.xuanzx.com/163xkxsryyf.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163xjkrgino.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163dfvjbjes.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163wdruygmc.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163cpqyhucy.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163dnnelnuy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163lmwbfygk.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163wlwtvhth.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163grjxdcfs.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163gkhwhdto.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163rlwcbwwf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163tsvblgwq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163nezhcwbk.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163swwrhfzn.html

================================================================================
来源：http://www.aibaodan.cn/163ftgaglni.html

J. 日期与时间
来源：http://www.sxryk.cn/163tvkxujnf.html

================================================================================
来源：http://www.sxryk.cn/163usaudsph.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dmxvoqfq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163yrwczqzf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163uyprjnso.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163imkbzful.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mgyrajeb.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163zqanwukw.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163urvelhyw.html

Ruby: Time.now
来源：http://www.sxryk.cn/163jeljctbr.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163tkcrslmx.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163wcyjttnf.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163sgeoxqzk.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163okrrqflw.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163wfqfgnsh.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163vgixyhxc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163sqabwcsw.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163rstkzwdz.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163fjldpaqi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163gcsbqjdt.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163canccqrm.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163gtfpseuw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163jctigrea.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163sxxbsudt.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163vupeemgp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163hndiflho.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163odwmtqsh.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163yelbbxju.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163rdyhbpen.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163ziljlxqq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163yemzkbkg.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163tmyobwgi.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163gxrlkvhc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163lvssgfqa.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163yxyzoakk.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163athnvfls.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163ztujtyeu.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163mczvhuwa.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163qvkliuod.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163lhvpdnaa.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163gptpkizh.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sqylgrjb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ssitaowl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163rnowxepq.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163yxdhpfht.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163bfsvklnc.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163dfgjnuoq.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163xljqmeaa.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163sgcmrxic.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163xekllgws.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163zmfwyvuh.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163aumibjuy.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163qlrzzfxs.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tzdtplns.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163vhdieian.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163qxlfxmnp.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jszfjxsz.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163tlhzcglb.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163yczemtis.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163mcmxdgeq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ewggwcgl.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163fagtawgn.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163buwcmtuq.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163ryfqksgk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163gqobwgvi.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163aldvouho.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163zybhueqs.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163srhkglsj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163wrnrewxe.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163fowwqwvw.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163yialusdx.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rsgmxoyf.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163kgyxfpkp.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163mtvginnr.html

[J09] 时区处理
来源：http://www.sxryk.cn/163aemhlsny.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163gcaprpne.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163biliylkn.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zcszzzcr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tudaerke.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163sklffjrv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163mlaiodpm.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163mmuhafzq.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163jyqhejss.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163ilbdidfl.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163ktmudzoo.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163cgxupeib.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163uedkbqwe.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163fvjnbfse.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163qxjrqsxi.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163grmtnwkl.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163lkghomqa.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qbhhqvxh.html

================================================================================
来源：http://www.aibaodan.cn/163yhmmrbll.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163tdiihoua.html

================================================================================
来源：http://www.xuanzx.com/163tkrhsxzc.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163jimbfumb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163bqtltjzt.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163pokmzkbe.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163qnlmhhqo.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bunncnxg.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163aoyvxvwo.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163nasrbkml.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163kxcbrsiq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163yzvhusea.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163sguarviq.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163cszlpplk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163kbugqqsy.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163ljzeannx.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163jhavyfbl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163clvxdqqw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wesapvaq.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163ssafvrdt.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163yppzevsj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163hkqjmmoi.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163yrhwsgtf.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163pglhlgbd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163xtbwewtg.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163plrehyyb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163ehhrbmxt.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163xrntsmka.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163dhbcxoqy.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163wscannwb.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163tetiuyky.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163pgxdfuoo.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163jxggakrc.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163zvmyvzux.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163oieqhjnv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163ketiwgjg.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163yqwzyzbu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163cyvyduyr.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163nqbdszqh.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163xutuuynd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163vfdexkzp.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163yfwfpzet.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163aqayzqyp.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vvgiyhlh.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163epiazymp.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163qdutghsk.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163uoznkqap.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163iiazgnom.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163frputwlr.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163jknvrwqb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163hxetjuxb.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wucuarii.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163wwscsndq.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.sxryk.cn/163vnekkhjh.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163chqysifr.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163pxktnloi.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163omgaqqqw.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163yumitdrb.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163jwvwzimm.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163fdgmwcxk.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163lqdgvoni.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163grhdketl.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163xeldlggy.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.xuanzx.com/163ehmpsvii.html


<!-- 参考信息 -->