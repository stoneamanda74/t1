外链999!wailian999！

Ruby: class MyError < StandardError; end
来源：http://www.aibaodan.cn/163hdvrrzbb.html

C#:   class MyException : Exception {}
来源：http://www.xuanzx.com/163mzefysjk.html

[H05] 捕获特定类型
来源：http://www.aibaodan.cn/163dcypatnn.html

Py:   except ValueError as e:
来源：http://www.sxryk.cn/163qrorlciu.html

PHP:  catch (InvalidArgumentException | RuntimeException $e) {}   // 支持多类型
来源：http://www.sxryk.cn/163sshykzhj.html

JS:   if (e instanceof TypeError) {}
来源：http://www.aibaodan.cn/163omhxdvkp.html

TS:   if (e instanceof TypeError) {}
来源：http://www.xuanzx.com/163xnznrdfw.html

Java: catch (IOException | SQLException e) {}
来源：http://www.aibaodan.cn/163porzxtjr.html

Go:   errors.Is(err, os.ErrNotExist)
来源：http://www.xuanzx.com/163rbttafvn.html

Ruby: rescue ArgumentError => e
来源：http://www.sxryk.cn/163caqjyfaq.html

C#:   catch (IOException e) when (e.HResult == -1) {}
来源：http://www.sxryk.cn/163xihpthbc.html

[H06] 可选值 / 空值安全访问
来源：http://www.sxryk.cn/163tddjoica.html

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163theudnbg.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.xuanzx.com/163zaltgbmr.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163fvzzurye.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163tfagevel.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163coldfwxi.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163rpiwblfs.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163kenqplxi.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163jdfhniyr.html

[H07] 断言
来源：http://www.aibaodan.cn/163phvhmvsp.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163ytoolktt.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163zlxdcvzi.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163jhjehddn.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163fxoebwxm.html

Java: assert x > 0 : "必须为正";
来源：http://www.sxryk.cn/163txteevwj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.xuanzx.com/163mtytfpqc.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163ryvxelbz.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163cmxosrfq.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163flkxqagt.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163lwxfvwvc.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163lnjwfhqf.html

JS:   e.message;  e.stack
来源：http://www.sxryk.cn/163chquqrym.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163eqvswsxm.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.sxryk.cn/163kbmgwoox.html

Go:   err.Error()
来源：http://www.sxryk.cn/163kkwcugzx.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163kwnpgcdr.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ywjpfgaf.html

[H09] 带错误码的异常
来源：http://www.aibaodan.cn/163icpquxnc.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163nfpgivwe.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163ktolupge.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163soyqwlvf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163lovckflp.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163dpvxlkdd.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163pqworvlt.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163ckpwursh.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163rplyjjet.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163bifrzoud.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.xuanzx.com/163jrghoing.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.aibaodan.cn/163xzcxpgmu.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163ybvshqvj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kcjmcnxq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163wdrzmdvb.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163eyqioils.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163egktdiyc.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163wvfzokph.html

================================================================================
来源：http://www.aibaodan.cn/163xxeyxkwe.html

I. 正则表达式
来源：http://www.aibaodan.cn/163madkfylk.html

================================================================================
来源：http://www.xuanzx.com/163iabycjkl.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163pouqkong.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163caiscain.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163neoqdykr.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163nidglmzl.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163otnitlyt.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163iemkigdl.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163qoqofpmi.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163ywxwjcdy.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163pminghnk.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163pteyfjrt.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163erwajnzk.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163ukkrtzpw.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163kepqgswr.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163lsntifyv.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163jdbjdrjt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163svownxcj.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163znrsxfkb.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163wfsjaczh.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163hxirnflu.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cdpdbmyr.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163gtnrjpvq.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163gdzjlpvv.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163dirmevrc.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163icbktlbn.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163dzgnjgzn.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163mpprgrko.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163roebpiio.html

[I04] 正则替换
来源：http://www.sxryk.cn/163ftkmbsji.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163isxfbxgb.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163vodbuzib.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163jzibormk.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163qjkgrhig.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ydiblpgj.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163uuooblpc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163wpcbjzhr.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163vreztdnq.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163mmvppvfk.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.xuanzx.com/163arvgafxl.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163wepmjedx.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163akskenfv.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hwxfxkxv.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163ztcrlxak.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163irnkydzc.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163dzwbptkv.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163ozemwitt.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.xuanzx.com/163zluklhar.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163zbvrcwoz.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163sncrxwem.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ctelufvf.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163guiuoddl.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163algtpfnx.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163clackhxj.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163qoaswclc.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lrcnnzac.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163vvqwczuh.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163yfkvqqkh.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163blnsjzlv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163psyhobln.html

TS:   /error/gim
来源：http://www.sxryk.cn/163ojztzuwt.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163hczzzjsx.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163ztbisahg.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163aldipsim.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163splidfdc.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tlfpciyc.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163tkwkediv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163dthxfftf.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hkaboofb.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163hbxfewiz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163junnjogu.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163hvbjpzwq.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163casjvzfs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163ukwxzxcd.html

================================================================================
来源：http://www.aibaodan.cn/163ytetbpax.html

J. 日期与时间
来源：http://www.sxryk.cn/163tswxujaj.html

================================================================================
来源：http://www.sxryk.cn/163pqxfnjzd.html

[J01] 获取当前时间
来源：http://www.aibaodan.cn/163qdsklutj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163lukptdoo.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163bjdprult.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163axndcppu.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163lyswngmt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.xuanzx.com/163ignziqtf.html

Go:   time.Now()
来源：http://www.sxryk.cn/163veyzjmsy.html

Ruby: Time.now
来源：http://www.sxryk.cn/163uzhnzrbk.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163acqnxqfc.html

[J02] 格式化输出
来源：http://www.sxryk.cn/163vlsxzfyj.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163wutlzsjb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163fhhtlrpl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163nhzpjczi.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163mvnscgkl.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163qkunhyii.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163uxjhcazl.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163nkeyavfi.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163udyxiqwx.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163bygbptmi.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163rsnewbrm.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163gnapnket.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wohhkghs.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163jzjzpzgo.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ggaerojm.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163ryhqwfnw.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163oyqfrjiz.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163hjucrrvh.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163zigociof.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163ngifshhu.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163uabaoknp.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163ougvsqlc.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163tbtirybc.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163dhjxtwrb.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163iglanhid.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.sxryk.cn/163nhxtqtrg.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163srzlgunp.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163psqihtya.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163jvzmaonw.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ymablnwn.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163cnhsxxpb.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163wszzcwxr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163rtreljlk.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163aiherryu.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163wydqsqwb.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163mwrldpty.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163kvofsoep.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163uuhtferl.html

PHP:  $end->diff($start)->days;
来源：http://www.xuanzx.com/163kbpijukd.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163pbhlhnli.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163yzdojhzl.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163kjoklhih.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163tqkgbyjb.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163cdbqzqec.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163awhbgohr.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163pyiqphis.html

Py:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163nulsbabs.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163bvvwoelb.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163afpawfnd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163kpeboine.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163vxgizffj.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163vcxqflps.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163yvkucvxx.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163waxgqmzz.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163mbbnfeqy.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163yrjwuysg.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163uxawzjbj.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163qrikhgxh.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163yujofnlh.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163aprefxlz.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163qbmikfli.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hsovxmqt.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163akvwfkkr.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163mqizbjre.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163cptvxpoo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163alahbkxr.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qcsntpff.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163knslpati.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163lgwqavdj.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163werokorb.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163afhdjnyr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163mhlxihmd.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163nhntvtuz.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163kskpoafn.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163xthxrlzy.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163dpjlxuqv.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163vsxgowxr.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163wksddyce.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163rdcoiigy.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163blstlrvu.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163ipvpnivd.html

================================================================================
来源：http://www.xuanzx.com/163lbohiekv.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163vfrbsnbf.html

================================================================================
来源：http://www.xuanzx.com/163rprfgzyf.html

[K01] 对象转 JSON 字符串
来源：http://www.aibaodan.cn/163nlckyxyz.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163vyywvtnj.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163fjgwgegj.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163jzhegori.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163xqthvorr.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163bhkdrzxd.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163gwecspzx.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163uiwzhidg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163kgpfqrsf.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163jeoyzbvk.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163kclfvpuk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163nsyvnmcr.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163vkgklgey.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163mgrehobd.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163lgirikud.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xiatbncb.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163sloktzyq.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163otxwqssa.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163izirptma.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.aibaodan.cn/163gincwhaj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163nqakstzx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163tqlehjvn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163rlajdiyz.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163cnnaupyf.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163iokidtcn.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163attdozkq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.sxryk.cn/163djtfbjjk.html

[K04] 读取 JSON 文件
来源：http://www.xuanzx.com/163nychgfyp.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163wgesexuh.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163hmacyizi.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163bnkbupzf.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163nulkdiyv.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163gepuvjkw.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163hvmebsvv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163sjxonzhu.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163haejexup.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163egpnqmkx.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163agclzlln.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163gblgonox.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163vfmnlvwv.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163wjdkcqui.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163rpovqzky.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163ixbynxcs.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163glwobgut.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163fbcoguxf.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bstfqlax.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163sdqwwocr.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163qshyldry.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163diupbpds.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163icqmmciz.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163hatfqgfp.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163mcwhqshl.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163kqsmtuxv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163tqcfrqon.html

[K07] 进制转换
来源：http://www.xuanzx.com/163rbmoiamh.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163hlykicdg.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163lwxstvks.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163jaauvacj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163xibiambb.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163ulxbqaxj.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163oirwqpgd.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163romdxfbz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163gxrlbffj.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163lhoibutz.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163bigueggl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163gfekecrv.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163pnhugaas.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163xmsyqvdf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163iydlxfcy.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163dmuxwhlg.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163xypkzpfi.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.xuanzx.com/163qqdlosly.html

================================================================================
来源：http://www.xuanzx.com/163ljthifsk.html


<!-- 参考信息 -->