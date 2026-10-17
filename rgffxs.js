外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dzolnulm.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163dfwbhbkv.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163idmbveom.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163futgmhjf.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ukustilh.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uyndbttr.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163eklunsui.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163kbobpysf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163ofqeykik.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163hhqqdlub.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163infastcu.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163rjfdzywz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163brrdobrj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163ipcygvfs.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163sqduxhky.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163flygggjp.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163fguheeqg.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163tlroznkw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163jvxpdyqc.html

[A17] 位运算
来源：http://www.xuanzx.com/163qemeqxnl.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rzalxljb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163kxqechzp.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cndmceix.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ydmlwpvk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ytaakqvl.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zreberym.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fvtsjjrp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jkgstybv.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163edpbmhby.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163jbazsmhv.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163wqbkaiax.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163xpghztpr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163luibvwjp.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163majdsnla.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163vhibwlpe.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163gswbrsum.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163wlepfbpd.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163iezpzcyd.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163sgyoljcb.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163gwxqvxog.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163yjyzhcxt.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163otwotgdr.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163yuaqkkym.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163mivhgjxd.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163kfbkzzmc.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163seysjzqp.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163nxpxzsbj.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163vcyaicxf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163jehmtpjy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163uqswcowo.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ymwlsaeg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163nwpizfky.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163kjbedvre.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163rexeungg.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163yzllvzbm.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163bwrwvjpx.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163rqjclxrl.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163kkwwtrpr.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163rqwptouc.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163nrcafvde.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vulnddlv.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hpxomdhq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rbqkddck.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163bjcafxtc.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163uiqzqeoz.html

Py:   len(s)
来源：http://www.xuanzx.com/163nyaspenx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163glaeagtx.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163zccytwnf.html

TS:   s.length
来源：http://www.xuanzx.com/163bkkgtrri.html

Java: s.length()
来源：http://www.sxryk.cn/163vofyjrgt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163jhgyrxcb.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ozgkkorn.html

C#:   s.Length
来源：http://www.xuanzx.com/163atdydwat.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163cjefdtxd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163bvzeleap.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163tjjdgswz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fnwcjign.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163dopfsqdk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ihvihblq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ujbndrnx.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ljzgjdlu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163lknmzrbu.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163rliepwoa.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163kvewxahb.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163mbusqzww.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163lfkgxbom.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163afinirdg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163emtshmbv.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163wlfryqhd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163xnbxdrkz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163lpxmhkvg.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163afdicyzx.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163bkxzuqfn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163zuodrxed.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lywurivd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163bciirdax.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163bioltekp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163nhnxocyh.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163mtxwpnuq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163sevtsoqn.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163dxsscacj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fxhgwsas.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163vwvxpvha.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163zptcdedm.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163iokwhxhb.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163bbliukju.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163xovbmjsx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163vjrcvctr.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163zbqnecgf.html

================================================================================
来源：http://www.xuanzx.com/163nufpgzjx.html

B. 流程控制
来源：http://www.aibaodan.cn/163ztnnupve.html

================================================================================
来源：http://www.sxryk.cn/163ffmwidjl.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163bsumefst.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163hltlfpuy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163dawylysy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pidmrbyp.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rttohdvg.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gzxxcxbl.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163wzynvxnm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163fwhtbbxy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mmeehuer.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163lkjkjicg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163agopghsn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163tmwfeiuy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oxmcenqw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hprqeheb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163frwtwtjo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163edrljmrl.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163yagaqqtm.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163odyzwrpo.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163wvdqjerr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163riwcdaol.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163mxxxrzqz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163nyzcmimo.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163duqqsihx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163pfthxqii.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163eehtuzif.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163eswuxnoj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163undlfvec.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163asrckyoc.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zzxgccyg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163hgrmgydy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mfzdwoyd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163khtebygf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163ufszbnub.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163bfvbjjis.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163wyrnyasj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163jodglyso.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163akgbfwwq.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163kzztecbu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163aaaktthg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tdybzveq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163uixpjnhk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163monrddgg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163jknwohbc.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163rkimsuhy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163mdragjax.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163nqkujzxd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163wkcudbay.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163qlzdrqik.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gbabxbfa.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163waeqphoo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163oaxyiadg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163iusluuli.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163xhwhrjgu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163oabrxlza.html

[B07] while 循环
来源：http://www.aibaodan.cn/163zfauunnh.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163czuowsqw.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163saipveom.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jrfvxwot.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163biyhxlpf.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jjodhuoq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163nqvfveok.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ckpwrqgk.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tyiqdaku.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163fnsriwgt.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163hqctjkod.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163wwoybfok.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cwuhprzd.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163pbsmsejd.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pgiybxzf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vwkaxahk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163zbnvomwa.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jswgnxam.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163jkezzcnh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163oklqkuwk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163dajtnqix.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163sueqfudd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163rinqjght.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bmmlzkmh.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163gxjdjity.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gvvbccgo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hbutevxi.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163bwzfaojx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mlsctrgr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hyeobfmc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163abjtcehu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163scxlqjib.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163aiuzyxzt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163cygnffkx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163jsgvhofd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163aetvqaas.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vioqxoxl.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163rsaxxewh.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163rhuiamxp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tqlvwvmy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mxmvbzlb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163dfycnpfr.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163cspukrst.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jawjndmx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163kqsuypss.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163zqkzpwxh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ooovrnfm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pbyndhsz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163inwqxzdm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bhcoypaj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zimtkyaq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163ttwitlon.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163wbccxmwi.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163xrdbknrd.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gzhdplfo.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163qptnvdsy.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163agnxxlyt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163riqiwicx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wifjcdyz.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163grldxptm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163fxylpcis.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hckydfbw.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163zkmwgobk.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163bmqzdjtt.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163xqxmgnzw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163chzuvexf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163mxcnxcct.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dzqngoyb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163upykiuup.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163gahxuyto.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163tolxgaal.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wuvtidkm.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163xnndrnmr.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163lhpnswng.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163pydacqvw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mjtsmyqj.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163zzlhdnno.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rlblnlms.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163mohbjjda.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163tnedtswd.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163yyxmttfk.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163omzcoqvg.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ktxsjuuo.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163vgcndkna.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163pfwdaakq.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ktkrxipa.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xxbozswr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ynlpxqvn.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nyempeit.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ewuuwmve.html

================================================================================
来源：http://www.aibaodan.cn/163bmctbrwu.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ekeuhcyr.html

================================================================================
来源：http://www.sxryk.cn/163sxhojixe.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qivkzbgf.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163dzudlxfa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163cfejfiam.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163oaqkmljt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rjxofnas.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qclbjuzd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mkzpetht.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rbaqxqpf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163odjrxgyp.html

[C02] 默认参数
来源：http://www.xuanzx.com/163dbyvvkhx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ildvrntx.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163kmnaoytl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163svrgbclk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163hxthette.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ezcrfxwr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163zaaxeczj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163jsmfwgpn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163yuwmiail.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ibekjqty.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163utjxylae.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163yunfrerg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ulgbsoou.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wlruyqwx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163enbjksnd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bzszqbsp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163cgbhxvae.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ncmufkck.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163dhlkwhoq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163pnytrtuj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nwokcrzn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163bropsabx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163djicbjaq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163mvwucvns.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163asnupybo.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ckyfokos.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qdbslcsy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bzromhip.html

Py:   return a, b
来源：http://www.sxryk.cn/163txwyzvyl.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163ytchxuql.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jspglbqc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163oesbrbsx.html


<!-- 参考信息 -->