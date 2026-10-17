外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163xvaotylg.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fhqfnkko.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163fmwrulfw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163nawaewub.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163lytmfnli.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163rhkkegng.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163wsnveiml.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163lmdrwpih.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163vwhcoxia.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ovhtljnd.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163fzgyqebr.html

[A17] 位运算
来源：http://www.xuanzx.com/163krkfyywh.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oirdfpmx.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163cojphjpm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xbgadwft.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vwwlzywr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163klmlyvnj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163clyyzsrg.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mfocgljv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163axbktoeb.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163tgfzgyks.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163idejsivt.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163zmauonmi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vftikrph.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163zuidedun.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163skzjjrni.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163newecwjs.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163kugllfob.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163jlcoelhe.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163fqzznzkq.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163pxpjgylv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ejczohhn.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163sgpwzomd.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163hqxecspv.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163chimrrdy.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163hdqfhdvm.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163vlqhicbp.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163hqlslbxl.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163tmwejnfw.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163auiclkar.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163pifppgny.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163sjvoufmo.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163gccqembp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163oplpvqwi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163mndjaaqs.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163lmzjynkk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ypmhmsaw.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163xltqighr.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163aogpeavc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fbagyntz.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mxxrmgcg.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163hknsdmog.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ueeiytju.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163kasolkar.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vspivfkp.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163bxpxwavo.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163fswotmiv.html

Py:   len(s)
来源：http://www.aibaodan.cn/163myczijnf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ukdffxau.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163uefbsvpl.html

TS:   s.length
来源：http://www.xuanzx.com/163dnlizbey.html

Java: s.length()
来源：http://www.aibaodan.cn/163evdnihpo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163qygmoxpl.html

Ruby: s.length
来源：http://www.aibaodan.cn/163utupauag.html

C#:   s.Length
来源：http://www.sxryk.cn/163nqeaketa.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163dqccatiu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163hiovenvi.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163suhvcubk.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163uwlclcgg.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163atdrxihe.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kgbhgamm.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163bnvbqspa.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163opwjeavf.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163xcrvqnpf.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163icwjecsv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163brbenhjz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163xpigtbsy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ymekgsfp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qajcteew.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163vueisjna.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163wjfejhgb.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163zsjprcsh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163smuiqcqt.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163nppkvwdd.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163wtutolkh.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163lxepogpd.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ssvamjfy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ueiduyxt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163mdzjcqiy.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163agjgtiem.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163odmtttls.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163euefszkl.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163tatrksxw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163wbowqthd.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qemiwwid.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qauqdduk.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163klzdkkes.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163pcankvkw.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163snyzsatc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163eqmpasqq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163ojpoiruc.html

================================================================================
来源：http://www.sxryk.cn/163hqvhxikq.html

B. 流程控制
来源：http://www.aibaodan.cn/163zdfoprrt.html

================================================================================
来源：http://www.aibaodan.cn/163hlvohshm.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163wvxqhvkc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163drnodgyo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163nzgnwvzu.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wkrhcmuo.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163egztnlzu.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ojkuaqne.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163hmsnmzdm.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163aknihyvq.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vpxybqwb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163lzftvtmh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163zuqqfxka.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163tpayylsq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bygdvyvi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rcltiyvl.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bkkenehz.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163uijtyhlh.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163qlmansht.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zsicdrwb.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163rrwbrgjc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163iidrrgcm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163krbgkkdh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xzzxgjdz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163eqtoauyg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163uvlabaxz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163fsmqounk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163rwkqaqqc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163krjmznls.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163bgndyslg.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163lxcwaclr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ogfiswfe.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jwuxtmlz.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163aqubkrti.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163xugnpvyw.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163kuuphxdj.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163yvhywmdy.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163estbssqz.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163dyaosygi.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jhtgultr.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163jwzkpfva.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163thuneyxa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163uzpqeekf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163lwuaurdy.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163gchszopz.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163rarqpumb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163fmuopfgh.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163uwaluomu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163pmxlxecu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163izsslhmk.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163mwkvhlej.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163kiwqxpvb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163xpdwunvd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163agaxszhs.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163nirpnpol.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163moqzwfgy.html

[B07] while 循环
来源：http://www.aibaodan.cn/163cnlmolgx.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163tuqxwlpf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163egpnmivo.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yqevqkop.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dhlbutbn.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163anwmuxvf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163etyscaaf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163dlwhstoq.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vzjdrqla.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163temxwwwn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163bokjyqwt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163cixpwqxo.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163eyuxdsyo.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nslbksau.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kplcoklg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163lmrlfqis.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163fitabghb.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mngtdjbv.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163yujmmulh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163wjqwtpum.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163wpbydvwi.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tlbgarer.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fszulukx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hmnnlnue.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163gfvidzcv.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163upftjvga.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wmgvpcwc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163ddfxnjqz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163huvdiqro.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ostixwmw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hjpducws.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qzqxwlkh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wehpfbjb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ggfmdkxu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163djfgoich.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163corqwbsl.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163uodttpwy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163fczdipcl.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163wqrrzghn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ccfpopxt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rwoyjssk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kqbfgogz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ojnnsnxf.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163nleipnkj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163cryjyrot.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mxnqkszc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vcpontys.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163jcpuqemg.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lwqvphqy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163deshpzvq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mzghkjlx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163gwlyrkit.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ixxkfqta.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fyjnodpj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rtmoewel.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163xesybouo.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163houncdfk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ztovghdv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kefiainl.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163xugdjdnw.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163bgepvwwp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163cjqflkou.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163lwybggcb.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ugxqyaaf.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ncffkqsp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163bqacmltr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163phowwshc.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163zxfqhqrm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163qixqppzq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163eumxszte.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yjcmgoqd.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163wisywcrr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163efyngxes.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ecwygxrg.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wnylxlpn.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ayflmwdt.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163yohdikqt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163okxcamuw.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163bbkqtxia.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163etwltgwj.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163mbsgsivp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163hyglhbpb.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ywdrdigh.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163zgwmpuwj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163dmbtgawc.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163dwatvcgk.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163makqdrha.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163cndpyger.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163wdztiagk.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kehjlkdv.html

================================================================================
来源：http://www.aibaodan.cn/163lkdtswkf.html

C. 函数与作用域
来源：http://www.sxryk.cn/163maoaweis.html

================================================================================
来源：http://www.sxryk.cn/163cakkutlo.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163fqifewfo.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163wgrdgmdk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163czuwcjne.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163cgjdsxwe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lsulhrcw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wydwyyvp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zxwzufzo.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vezzgayv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163usrnbogk.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gsyaicid.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163jwxusmbl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163lawfwcfx.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163eyvdhmty.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163pczbyoad.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163bkdezeaa.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163hnyznown.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163pcmfbimy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163dxqgpfvg.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163nshqiika.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gklphknu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vtjlgkti.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163aadgieou.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163niompepi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163hxmiqytc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ndisomti.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163vmjqrain.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xgnanfwe.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163uzllwypa.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163vlndafqg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wpjqxqvj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163kykoitss.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163igslnjjk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163xcjcbvuq.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163vuobwcme.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xodkbtsb.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qruzysii.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163kfeqfudj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163cunmpvth.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163zpefyudv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163pthlnzaz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163xydlwxnd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163lcupraia.html

Go:   return a, b
来源：http://www.aibaodan.cn/163zmtcwzrw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163fiodryzr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163dyggcwgt.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163dvlczdut.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163mufduvbp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163tshhuupu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163phjuplor.html


<!-- 参考信息 -->