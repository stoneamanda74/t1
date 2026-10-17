外链999!wailian999！

TS:   throw new Error("错误信息");
来源：http://www.sxryk.cn/163kaicasgu.html

Java: throw new IllegalArgumentException("错误信息");
来源：http://www.xuanzx.com/163rcepwmlo.html

Go:   return fmt.Errorf("错误信息: %w", err)
来源：http://www.sxryk.cn/163drlpnlgw.html

Ruby: raise ArgumentError, "错误信息"
来源：http://www.sxryk.cn/163hiszvpqj.html

C#:   throw new ArgumentException("错误信息");
来源：http://www.sxryk.cn/163lnrrxkbb.html

[H04] 自定义异常类型
来源：http://www.aibaodan.cn/163xctkpkpn.html

Py:   class MyError(Exception): pass
来源：http://www.xuanzx.com/163hfsbvapk.html

PHP:  class MyError extends RuntimeException {}
来源：http://www.sxryk.cn/163shhndckp.html

JS:   class MyError extends Error {}
来源：http://www.xuanzx.com/163burmytcl.html

TS:   class MyError extends Error {}
来源：http://www.sxryk.cn/163vjszjiqd.html

Java: class MyException extends RuntimeException {}
来源：http://www.sxryk.cn/163qvnepxoz.html

Go:   type MyError struct{ Msg string };  func (e MyError) Error() string { return e.Msg }
来源：http://www.xuanzx.com/163zvbyiqiw.html

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163bsrglktq.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163rpwrthof.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163puzbppeh.html

Py:   except ValueError as e:
来源：http://www.aibaodan.cn/163xxiehcof.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.aibaodan.cn/163oaxvkdvz.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163wvrclutl.html

TS:   if (e instanceof TypeError) {}
来源：http://www.sxryk.cn/163xpfhpvyn.html

Java: catch (IOException | SQLException e) {}
来源：http://www.sxryk.cn/163vqvipqlq.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.sxryk.cn/163huvzlpzi.html

Ruby: rescue ArgumentError => e
来源：http://www.xuanzx.com/163fvhbfihj.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.aibaodan.cn/163iupmyxru.html

[H06] 可选值 / 空值安全访问
来源：http://www.aibaodan.cn/163aljxwwxj.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163lfxfhegc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163eljtiosj.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163qrfaxzai.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163wamodwrs.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.sxryk.cn/163dzcfpzjh.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163xdbncrve.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163viytteam.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163ekiuqwqk.html

[H07] 断言
来源：http://www.xuanzx.com/163prxtwtsh.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163bcqslcmw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163bcnihcpq.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163eblpkfoh.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163wkvjbmhj.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163lkumeyqu.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163mnplvgie.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163wvrdsgow.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163fidmpzkg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163qdrmrpkz.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163elvpxqzk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163joceewta.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163bddivave.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163qrsyyngl.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163vopsesbp.html

Go:   err.Error()
来源：http://www.sxryk.cn/163rtqujgsw.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163aqyezpyu.html

C#:   e.Message;  e.StackTrace
来源：http://www.sxryk.cn/163uebgnywx.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163kcqczzjw.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163aqchfrkp.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.xuanzx.com/163baruqlcg.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163siadzgck.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163nenzqaxc.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163lmxfdhyn.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163orexhqyw.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xbkvxram.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163ttixnyrv.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163yayawoak.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163eoexsrln.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ajkeitvu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dpgmycab.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163quczwbnq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163jlfmbvrp.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163tpdajbnd.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163hisjeuoc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163ypvprlce.html

================================================================================
来源：http://www.xuanzx.com/163reyzpcee.html

I. 正则表达式
来源：http://www.sxryk.cn/163etvszfmo.html

================================================================================
来源：http://www.aibaodan.cn/163iyxfwdoy.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163aofpyiaw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163wgqzbzlo.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163jdkaxzqo.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163tcoabjqa.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163qplizwuz.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163yvokdzgi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jzolmwdm.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163hfybnkwz.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163exiocdtg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163dhnrszde.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163yqcesskn.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163yzsibsdx.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163ynyhuhvc.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163xlxaaexj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163lzmeycmh.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163icvnjmei.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163ooryrqah.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163sscyeanj.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163siiuotpp.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163gtruwojf.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163eyqersrz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163wnrnsccd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163dlfvweba.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163knuaccda.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163yxowowba.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163hqxtdhlg.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163zdpnkdba.html

[I04] 正则替换
来源：http://www.sxryk.cn/163mseqywhc.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163hxaoauco.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163nadavmmo.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163dagtocbt.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163zliolrqd.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ycfrlnor.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163uajydgjf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163dkehfidw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163ouuefzcr.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163odjykokg.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163khmzenrq.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163jcuqjceu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163cdzmirsr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163fbhzzkxw.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163kdsrgjfg.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.sxryk.cn/163hmgrppqz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163siwgdlrt.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163vwremtag.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163udxxgkmz.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163jtrrpjmu.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163lziyhbtd.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163gurkxmjr.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ampoxseg.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163cxkvhpvl.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163usumchpq.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163mobmtlup.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163dyczmioh.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163muigjccc.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163jadivffi.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163puscdfkt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163edoeluas.html

TS:   /error/gim
来源：http://www.sxryk.cn/163hafatdln.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163lzlzhfqz.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163idzhdfdm.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163hscxfoqg.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163qhutzqsw.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163etwpbuxg.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163mhqvwrzm.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163pagzjzmw.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163mqiohqam.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163djhjrriq.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163xllcrfgz.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163tasfdgag.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.aibaodan.cn/163ndlaoebe.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163eoltkoij.html

================================================================================
来源：http://www.aibaodan.cn/163lhbjwrqe.html

J. 日期与时间
来源：http://www.sxryk.cn/163ywzbsjiq.html

================================================================================
来源：http://www.aibaodan.cn/163driewbsd.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sljrugid.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163fltrvzkf.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zyjfqebj.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163linrqtyi.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163nxlrxeoq.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163fuvlknqf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163gjacfdkw.html

Ruby: Time.now
来源：http://www.xuanzx.com/163kiujvqoj.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163cdhykrck.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163dworokiu.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163calcqbru.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163hycfsmyz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163hrazwdfa.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163agptqubl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163avyplovc.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163wlobqspe.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163dtyuxggz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163xfosuhaa.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163odybkwbb.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163mgzijpil.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163axapseih.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163fetlyzjg.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163jyarmvcp.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163hsnffsoh.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fprdlhuo.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163kbexyrsk.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163zminlauo.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163fzhdwxqi.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163fwhfvwqk.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163tkzqcris.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163evzwpxkg.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163cvnrlkew.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163dbgoochl.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163arznsmha.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163aoqdsvys.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163smdynbxm.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163yalhxbsm.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163exzvaibt.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163adfjdupn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163qbfbfxxu.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163lzvcchvo.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163ouvfemmk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163ivhwhoov.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163efrwwass.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163aqmgwjcz.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163nfmubdan.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163nhxoecpm.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163yzfjhcbq.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163wsgjrswk.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163rawfxooi.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.sxryk.cn/163qisifuml.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kvsradat.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163sfdizynj.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163tgprzplz.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163xptpmfox.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163vnkqmvzi.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163witpcqjk.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163dzlqytil.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163sdhusvta.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163zwwzpofc.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163rhpsghfu.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ekwszizt.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163tedvzdfv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163pookwqoy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163pgdwtzpc.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.sxryk.cn/163zcszroin.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163yagmtynu.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163hsxzvahk.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163dzkiqohm.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163teqpsjdi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163copwdvvt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163bzvnouzf.html

[J09] 时区处理
来源：http://www.sxryk.cn/163ndgqmldf.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163dnpptvta.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163rcyzfoyp.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163allemnsf.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163zwamdekr.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163fgqnaiug.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163bwbxzkcz.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163nazsmadx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ojhdxbkt.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163vsjhqywx.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163tvqmwzjm.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163marehywe.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163rrbamycj.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163djuipsnd.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163hgwwahwb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163bxpdnxpe.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163ymudjkxm.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163vowmjcrq.html

================================================================================
来源：http://www.sxryk.cn/163eavxznmm.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163mwrfkwmx.html

================================================================================
来源：http://www.xuanzx.com/163hexxnhqb.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163iluvqjta.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163dasoowqs.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hjtltahb.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163aqefszgu.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163dgeifcpl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163zitveita.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163nydgqofz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163msxdbdtk.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163egmtandu.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163vcuzenfz.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163zeblrrtb.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163ttxvubnj.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163cqhrjfmj.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163xmhhvzso.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163ihiwvljz.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163uhkslvma.html

Ruby: JSON.parse(s)
来源：http://www.aibaodan.cn/163okoxeitl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163jzyokdao.html

[K03] JSON 美化输出（带缩进）
来源：http://www.aibaodan.cn/163ilibtdis.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163rbsuynsh.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163vjyzrizw.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163bnobmsrl.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163byhwqbls.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163bfrkkihm.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163wabkaxsg.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163qogagwic.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163dydomida.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163drrscqqc.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163beichtui.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163ucewqmui.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163wicbrkdd.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163prebpslo.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163rhkhtmiu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163sduefknr.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163zpxbnzad.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163gctevrli.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163drnzhlwv.html

Py:   copy.deepcopy(obj)
来源：http://www.xuanzx.com/163rknnxsaa.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163jylkwqlg.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wcmywvdw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163pnphzlnr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163yrxhphlz.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163pypbhrzc.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163ybkgabvm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163jrvpuozq.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163ybjguzzs.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163kibnegyx.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163knntvfom.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163zdgfffab.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163vpoxfivh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163vzgyutji.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ogqaywgc.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163cwrgclan.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ruokzxei.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163aongiwdj.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163tmheqzqw.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163hbzmnldj.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163hqohchvd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163xzkfzldm.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163folderwa.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.sxryk.cn/163inzafgpc.html


<!-- 参考信息 -->