外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163gpvrfqqr.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163qvghjukq.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tjtdjnlb.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hdqcyyjo.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163bsomjxnj.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rogarofg.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163tlsxzjpy.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163itvxfoaj.html

[A14] 注释写法
来源：http://www.xuanzx.com/163dzmhlwes.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163iparuyac.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fvahlmaa.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ncggtpmp.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163jpoksvmr.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163iepwzabj.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163irtujyhm.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163iflozrjt.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163gcifmuhr.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163kmcaabgo.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163jupvygxg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163yhnowwne.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163wsgnwojb.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jtfwhfaw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163lkgkyvav.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163iyypsveu.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wlfjorgp.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163ksmurdfx.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ekjqcopj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ovcngxzh.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163hpobjwfz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163vebhgrid.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163klgsaqmc.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163fllsxruu.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ofveutgc.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163pdlczrfb.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163tcsqsnkz.html

[A17] 位运算
来源：http://www.xuanzx.com/163kajzheqn.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163mozcqgop.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163swrzqmrk.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hroqtsfu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163mfcycxdq.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hytdgfeu.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dtwvniqh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nxymnapp.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ngiehlbu.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163gurhvqjr.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163kiqoyjxr.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163odakngbg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163chcraqhy.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163dvbyhnkt.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163tiwyhouj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163hpveblra.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163nuaxfupd.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163qkxhsuxk.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163edeaotbd.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163nggxjwno.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163xowjxwal.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163omcxweix.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163tkybfgvs.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163wikffbrk.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163lmqeqefm.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163iisykzgp.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163rvodnhno.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163tonjunwo.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163irqkkrda.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163xkmbplux.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ziurmwbj.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163jodnjljr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163qabelihv.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163xswqsiut.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163lyfapama.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163odnpluqj.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ejrzioaa.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163wjgpttuu.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163hlybgxsk.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163csvphvrv.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163wejwrwym.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163bdybeuup.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xczzwkvk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163axogwpfr.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163sfrrhhhv.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163xkbjacly.html

Py:   len(s)
来源：http://www.xuanzx.com/163fegcxlbs.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163eamccqxw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163vknjqrxi.html

TS:   s.length
来源：http://www.xuanzx.com/163pdxlyubl.html

Java: s.length()
来源：http://www.xuanzx.com/163xfjnfmzp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163cyshqpqq.html

Ruby: s.length
来源：http://www.aibaodan.cn/163krcscyhx.html

C#:   s.Length
来源：http://www.xuanzx.com/163ogegppqd.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163ddfnetuw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163qlryjtrk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ebpxzivy.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163bjtldblq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tsnbpajt.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163tqjbipsk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ganbxxuk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163bmffqdoa.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jqgvaotd.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163hotbznic.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163zkizsyek.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ghievqqi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163knqbwrbi.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ztqxnfnr.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163gtgahmjz.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163nbrcixea.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163dlnfwttz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163oilqahxw.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163kasmrtjo.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ofnzrrbf.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163audmvpip.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163cjbaxcgf.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mlmeanwe.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ypzwmgfa.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163whmhndec.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163blkkozxp.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163atrrtzqw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163rgswmifq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163jbxuyscl.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163eadcqybf.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163fyxmrvsy.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163kadvctbu.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163mmavnwsy.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163zabrnvhb.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163dglxrjlh.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163vjsawlfq.html

================================================================================
来源：http://www.xuanzx.com/163kbekljqw.html

B. 流程控制
来源：http://www.aibaodan.cn/163hgcwmjva.html

================================================================================
来源：http://www.xuanzx.com/163fgnzodfl.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ispeduku.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ybrrzqrq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163yzrvzwlk.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jqkxqffh.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163btcbvhbx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163zkfuqeky.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163afscmcth.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163vyfvximn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163myzenqgz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wwjtovbc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163agywfsab.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163eddcljar.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zxwbgeka.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163necyhvbb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dqvzoekg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163wbyjqllr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163luzntuhk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gshdavkk.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163aexgzbzh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163pczkrnzp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163kbmckkvx.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qvjqmerk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ywveznaw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163cbfynvnr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163xhiylsqx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163zndeyhfd.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163imznbkkk.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163gzrjnuhq.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163bwrufgif.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163gaowgyox.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vsdpqrcb.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163pnjvqqwt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163kwvpqwir.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163hqhxiwbv.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163tekwurvn.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163rsxrpltv.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163whtutzfp.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163qljsvpnt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163wcqlkymb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fwvfptxl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163vyakmbjm.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163oobyryng.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163giudmizx.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163tyxmdhkk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163neaxwupz.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dcffienr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163lecmszfk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ktoywqxf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163lnuxtsly.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163yrshgpai.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163zhpaviys.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cjbddett.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163rpduqlxq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vfwfapum.html

[B07] while 循环
来源：http://www.xuanzx.com/163lvavhzyh.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163mkexerem.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163hgdjummb.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yurvzbni.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163oxxqdric.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163utxtpebr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qysfhgnd.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163fnhtmxdz.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gxvsibhs.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163gjfbghsm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163gjwezwvk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ffodzybs.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ngruxweu.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eommybgp.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163sjgfmljv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163dpncdtse.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163rfuorpfx.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163omwbvltl.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163rumidrkq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163czqbjlrt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163bmhahebw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rhxsaxhh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163defjanmg.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tifvayyl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163wglxvyui.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dwejxpwx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ggkuyhyz.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163upfxkscy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163nddzvuse.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ygkqvxhw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163sczhclwy.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163xejcndnj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163njcsucgz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163abrpigek.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163tjsyzmol.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163etdzyhwi.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ufgrhmds.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163uenyxbpk.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jbnepjeb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163novappbq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163oysbuqnj.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163spbkyuhw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163vdgdrqio.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163mjsyeftg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163gvzfclff.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163vssclgfp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163mmwslprc.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163vbfefmpw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jmzohgub.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ifmnnzyz.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rdwcifld.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qyrmbfrf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163mqqaymzc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163mbqowxrc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163ztbeenne.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163vevsdqvk.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zerjuwne.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yrvaqczj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163deqvguqi.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163vtjczmtd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163vzagfjqg.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163gsnhrhvs.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163ftlajovl.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163qrdhadxg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163bhltxtwz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163swdegusr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163adnxrjcs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ounhbgpq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163xznaltly.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163nksbgvpn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163faguqqmv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163zkncjyrm.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ukfvzify.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163fjhzlgah.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163dgqkhizb.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163xhkuicwa.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ahgbgqtq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qynbgadg.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163yfgxralg.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163hssziczn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rxleqwwd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163eahsqvhq.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hzyfxztu.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xzmcfnyc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163shjgpfsl.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mpplhyik.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163kcslpukv.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163dnbnguiu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163uwxklkoq.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163qbpveses.html

================================================================================
来源：http://www.aibaodan.cn/163ewjgqcbv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163bcpcqznb.html

================================================================================
来源：http://www.aibaodan.cn/163tkaruirr.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zvtvaimp.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xzfvqucq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dukcfhny.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rpxyzluk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nkjxnkle.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163trcfglqi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fnxlgalt.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163nzqgxwmb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tczlupel.html

[C02] 默认参数
来源：http://www.sxryk.cn/163yccwbgaq.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163hsahwvbv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163htudueeq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163djuvjkwb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163kziiriqv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hvdfyxem.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163wrhxxopt.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163shodndnv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163rmudvclt.html

[C03] 可变参数
来源：http://www.sxryk.cn/163fahoeayp.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163pbfbrtlg.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ubxpgusl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fspitrzt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163djbappuf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163tbddkrpu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jgxonohu.html


<!-- 参考信息 -->