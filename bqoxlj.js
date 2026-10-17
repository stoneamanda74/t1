外链999!wailian999！

[A14] 注释写法
来源：http://www.xuanzx.com/163etxfawwy.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163cyxwhcja.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wvbvqhvf.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163suumuecy.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nvnbsxgj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163rhahtdrs.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163adtqcwva.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163sjfshbtc.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163yceexmtv.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163xkotvbge.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163vnytppsz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163imclbthj.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163izyisted.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163qjvfwxpa.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163yjsikudi.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163qalbchig.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163xhudmjzs.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163qabjkhro.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163qdrlpapv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163zfyxmaag.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ynkyejac.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163txywuomn.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163avcyxnpr.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163fghygucr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163gzlegzlw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163llamevha.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163kngdlhma.html

[A17] 位运算
来源：http://www.aibaodan.cn/163zxuoghho.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163agdqawxh.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163djeptxup.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ukmkwgfy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163hmlyprkb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163anbeycju.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fmzcahtw.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qxxcmhcg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ydiwrslj.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163bugqrruf.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163qsfrgtyr.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163efflbevy.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163jwhjkeoi.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163sekizxns.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163qdenadei.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163prmoavny.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163rikmyyjm.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163tppfbnbk.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163ysotleec.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163uhrkvebo.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163qzzkqocc.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ugzthhhd.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ancqzpwr.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163hpeehvyk.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163adnggnka.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163enpvchfs.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ecvwstin.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163qctpkfkm.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163zfynukao.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163wgiykfpn.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163zgbheztk.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163okqbrxft.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163glzvfron.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163wjzkjrol.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163hlavcxfz.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163tdglqtqw.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163fqcrftnc.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163ynarcnxr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ifhzozxe.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163logjzkkw.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163lklfxszh.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gpymbevk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ogzghwqy.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163cxaokius.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163fxhtasfg.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163eaybfjux.html

Py:   len(s)
来源：http://www.sxryk.cn/163wflqnxpg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ufjiaqkh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163xllcimfh.html

TS:   s.length
来源：http://www.sxryk.cn/163ijgqvzof.html

Java: s.length()
来源：http://www.sxryk.cn/163vyrezzlb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163nowopgvu.html

Ruby: s.length
来源：http://www.aibaodan.cn/163fcszueik.html

C#:   s.Length
来源：http://www.sxryk.cn/163nehvlban.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163ccxaoccd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163waohutug.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163dfxayhad.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163tqbpjktv.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163zwkfqqjr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163vvtshugo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163qxxzxssr.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163hthrjeah.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163unwojsiz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163nfzqldui.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163tzsyvvsx.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163qiyeqpgn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163hemwodsl.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163wehtmydg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163ejucvglj.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163hzqbrrxd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163fseixkyl.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163thcvmipq.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163vkqjilmg.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xbxrtiio.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163pyknnqqw.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163xlwrgitd.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163narftlaa.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163zapuczna.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163fyrhczfc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163wzklcvwj.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163rtekwqhc.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163qgqlbjnj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163nhnrnhut.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163opzpsuaz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163sejojfph.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163tlmipqkt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163xrrcebto.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ppfrdxmp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163lmtwosbu.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163fjogimlr.html

================================================================================
来源：http://www.sxryk.cn/163ipepjswx.html

B. 流程控制
来源：http://www.sxryk.cn/163nqugordz.html

================================================================================
来源：http://www.aibaodan.cn/163txgvztmc.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163niqcguio.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163iaylsjji.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163bywogtpw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qcmkoxzm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163sidvhfsz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163alktxruh.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ngypkxzr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163qaqsintn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mgfuewde.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163palpsctc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163qnulldtg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163dytcgpqz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pidpwmlq.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163scwmyror.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pibkzkqf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163zkvyjjeq.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163svlzqutw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163whuasdjf.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163zulgkrcd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163cllmtneb.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163nzsfnnpb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163ezadbvpr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qfxxvwgz.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163jzjppili.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163logdttpw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163olfpioqg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163lchytbya.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163hmnmkoxr.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163ntczulqu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163pipnsisq.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vkvrqnqj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tjvrmbjv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163vbxsnele.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163awmsowup.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163bqgfcier.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163eyxehylz.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163reorydvs.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163zwxschtk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163sikkvrlt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163pjdstpcn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163legtrrbp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163jyetjhid.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163xibtwdja.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163jhyzlcyf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163uomdgiqx.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ywumgrkb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163dqsfbltz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ultszylr.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pjxazwgx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vpgrprsq.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163btjevqdn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163wiilrnba.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163irffyuoh.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163iklnrtly.html

[B07] while 循环
来源：http://www.xuanzx.com/163jyherbkn.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163nnznikys.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163fkimracl.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ydagcidq.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pupuggxi.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zlidppsz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163dcryyndp.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163brjfgcjw.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qkpndbze.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163auuridsq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163cczpcvrs.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mewifzsh.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bbvsctfd.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gqlkoflp.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yogdbsox.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ejehredy.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163jxbbmczn.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kvjpqwed.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163xgtqcklj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163oxpybexa.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163qffbzsbo.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ysajaslz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163yquykxhg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kjreuxjk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163nrmepvbw.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163lhfvtuvo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qybannab.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163rvblkoxa.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163isdyabvr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163tzolritm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163faeayhqn.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ohejlwwv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163aoojvytj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163nehpjwak.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jifiifsu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163dcrptguf.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kaqipvhf.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163aevhuryu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pzbjfkzk.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qpehloya.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163gbeirhfq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163mazqmxrw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163oskcadzn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163azzqmpfk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163lqsdxqww.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163tzktboyx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163rfsimecb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163joavkplc.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uzpqkhve.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jebrepry.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jrxrgjfz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zgrxeiaq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ljbmvmvh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163qofprwdt.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qjquzayj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163elagibmh.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163jyqzptyi.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hotvwmrr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163izpahjft.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163iorolgyw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163xlzjgwed.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163lfexqptk.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163oclamiqg.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163dfcolqbg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163uzumksci.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163expkgwoh.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rpvttxoy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163iabeiriv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163phzhghdf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163qopaubrq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jzdiaufo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163rrhztncy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ttcyufdt.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qlslwmep.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163ocgfdafj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163gjylxdfn.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163evqgiccg.html

Java: a && b || !c
来源：http://www.xuanzx.com/163pliovqjd.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163kqingsfk.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ehwmhyji.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jjxwucuv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pyxzoimu.html

Py:   if not data: return
来源：http://www.xuanzx.com/163phoumqtt.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xetngptu.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163lvnjfpgg.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bsrgcfko.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ifadyzdi.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163oamttjgi.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163htndamvc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163yjgcgkpk.html

================================================================================
来源：http://www.xuanzx.com/163elnvolov.html

C. 函数与作用域
来源：http://www.sxryk.cn/163nbbzayrt.html

================================================================================
来源：http://www.aibaodan.cn/163cvqxtzql.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163foncfrra.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rxzybfbz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jxbtxkwb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163maaiwdfg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tggtpbcx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cjkdepso.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163nyjtilfj.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ernswrvh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gnuuxdbt.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vgiwrudd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bdatkvsu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lvnkojyp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ariwkxbm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163rgxrtqjm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163lpjvvlqc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163wlqbnqev.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163soobbuah.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163smevjvvn.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qhxlstup.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163thftlgbn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hdetpasj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ansgwuig.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zbujpjva.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zditsadi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163fkhcbnyb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163pzyxlhjb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163mhdkrleh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163nvjsplaf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yyyexjwm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163sapxoqoy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163flhrqvtw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163xqtxsxmf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ctjcfggg.html


<!-- 参考信息 -->