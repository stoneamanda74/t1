外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163fazqyhbw.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163tbuicjia.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163poekzths.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163oblqcswp.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qpjcnkoj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163rrxkmrqr.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ypapxsvp.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163bxirewyy.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163bzkrcfqz.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163pckuxhuk.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163zitjrvwk.html

[A17] 位运算
来源：http://www.aibaodan.cn/163kcimltba.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163aiqegrdb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163juzyzzzu.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163otafznkh.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163nldsurak.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ghbvzhjg.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fkflnklp.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vragcycg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ewzsrrqx.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163qjykkrex.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163wawftbjn.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163gleevwgt.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163jgbrdvjd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kptmppdk.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163dwxsehqt.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163uxmsewzr.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163eirmhdzo.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163khbzwutj.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163gaokazmw.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163cdohijaj.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163remhpjad.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ropvdrgv.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163argzokib.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163uefntnbc.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163amcidlhl.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163smekbakq.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163deotzofa.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163eullezuy.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163sedpczdl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163hobkknqi.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163buzdbkix.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163takjdace.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163nergfixn.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163fifbkmib.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163bbnhqyir.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163xekmljeh.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163wgdavkad.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hsthudqi.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163mvkmtxpd.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163bppentgn.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163qmsvgzxq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ktzxrvyb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163iajuexlw.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zhfohpax.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163rrxhrikb.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163vyrmicgp.html

Py:   len(s)
来源：http://www.sxryk.cn/163jxqwrybw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163spyuhpym.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163snyyirls.html

TS:   s.length
来源：http://www.sxryk.cn/163qnaakyyb.html

Java: s.length()
来源：http://www.xuanzx.com/163fyfoxbfb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163exbquwoe.html

Ruby: s.length
来源：http://www.xuanzx.com/163whzqwrla.html

C#:   s.Length
来源：http://www.aibaodan.cn/163eegchqlq.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163pbejgrlc.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163adtmadze.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xhokuybz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pzaszhvw.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163nwqhdjkl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gzolluan.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163vkdcjdyz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163tgbcvxhb.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163jratwpoq.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163vqryyiml.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163vqcylmyh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163mipzdezn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jerwmyfz.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163pnectmzk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163gofynpsa.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163wwmeubhq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163hygxxhme.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163jzndfqfv.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163uvevvgyg.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163qsokaktr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163brpgefoj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ysjbfilo.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163lwwctyta.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163ivcwozns.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163yitwgorj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163oovykviu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163dioqwgji.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163vjzrcbew.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163endtxzys.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163ubwgzfth.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163cmphxuvw.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163fzlkbdzp.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163tdtkeuun.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163dzrwilpj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163wjjwopgw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163xjrqqrtg.html

================================================================================
来源：http://www.xuanzx.com/163khiiodgx.html

B. 流程控制
来源：http://www.sxryk.cn/163mzzozzyn.html

================================================================================
来源：http://www.aibaodan.cn/163ikpnjovk.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163qdlrvobf.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163sesgqnum.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163alwebids.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163sifhcogj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163gnfplvvd.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163epzetsjd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163yzeavogx.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163gyryyobe.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yknlokgm.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163rhsearfc.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163wtcsyxxw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ocwqeidm.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163aolzghad.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nzkcxcux.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ukekzcyw.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163zlwkciml.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163nvexfaxl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tmdsejyt.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163gmazbgjc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163bkxmfywh.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163vtjchagi.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cmiolucf.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163brigvwsk.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163owlbxoke.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163yvtevxku.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163tfadwlmq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163pfhfavqf.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163enqrrxwf.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163noeuovaw.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ozuntrtf.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ruiljhzg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jbznagyq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163peqqkazr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163cbydtfdo.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163npjudufi.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xufeidqe.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163wgkvziha.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163xljrjhbs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ftouipet.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hqzfcasn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163iyhjescr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163mmnzcoak.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163akbxosjn.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163kfoomcqa.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zvogabvz.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163lmqhdclq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ghqappjb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163pnblnyzt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pzonznir.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163uteiinbh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163pwdfgrnx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163khlyqaxn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163yastkkkz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163hnrqocsy.html

[B07] while 循环
来源：http://www.aibaodan.cn/163qazbfego.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163wsopibpr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163rzrjmufo.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nxdjnpfx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qvehidae.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163huseytxh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163scoigmvk.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163xzjeokyj.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163amedxaiw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163prrwxsqq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163zopcgkmt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163jgbbqzhb.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163wozozoqi.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mpvaszba.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qozungpw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163mqgssdwi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ygawzzed.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163idrvlupr.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163oqvtsayb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163umthmywl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163hvstmvwz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163steueifs.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xngrnopp.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vvxejukn.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163tvpxbuek.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163bwlrrbun.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jctgrreu.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163semtrzot.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ccolmcks.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163dyfyjwvr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163uijuvwzc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163lhtaofhl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163dmkbdkul.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163dtxdufmm.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163tjqkmpgo.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163tlampflm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gkmuscre.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qrwpbqsg.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163gvhidovl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mysqivvx.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163wlmaaumq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163dynvpoaj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163dfnxxpvh.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wzbdrzob.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ekghajep.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163uvttywkd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hzprzgyn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ozxkatry.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kqvkiwmo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163fceemgrw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163opvyirtj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jsstbxjq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ndjbrfua.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ryzvdknm.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qjjoexsr.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163uvmqmdiw.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ntupeeie.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cibrizno.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163xsynmmdu.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163dfjeepym.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zmwhjpub.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ktocqovr.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163eczjkdnp.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rphvsofm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ymbqnesz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rebjhmme.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hgtrrdxs.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163uvjlfiez.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163rnybbkbc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hioncwid.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163bbimftmw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163sytrqoic.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163bvrcogrq.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163nnrpsbhh.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163lszhutbr.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ahdykkcs.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163argdybiz.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ejbxatrw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163bdnkryrq.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163cxqzrbjs.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163odxmhfpr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163tnwjeylv.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uezlssed.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163mgferugt.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163elzmwjkj.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163osyxgbnn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xpfdifuz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163lqenqivh.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sfidamuf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hsmnqfxi.html

================================================================================
来源：http://www.aibaodan.cn/163mjngvdjc.html

C. 函数与作用域
来源：http://www.sxryk.cn/163ebzzabjj.html

================================================================================
来源：http://www.xuanzx.com/163uinvvetl.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163vnulslvd.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163fewablqd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tnbbeoxw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163cswvdjrj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mzamtzxq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163fboxsxeo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163flponwsh.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163fzyxcyqp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cmwckmom.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xjomwktq.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ycfrszpi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163qirfmzuv.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wsaufsju.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163cqbvswti.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163spyijsav.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qfoszdnt.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163dtllmzxt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ayyctuph.html

[C03] 可变参数
来源：http://www.xuanzx.com/163epytodxm.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163aothavmq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163mqzhectc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dxtrktct.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mclrjzwj.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hbdflgsn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163leyfaarx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163lkhugxna.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ykljfzby.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mcghdfok.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ejhhtqci.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163artzzeql.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163uzgrcbug.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jzniiwvv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ufiksczs.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163xpjivorb.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vwzrbfls.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hwdcwvqs.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nexbysox.html

Py:   return a, b
来源：http://www.xuanzx.com/163xxbohmmy.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163zkmxgxls.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163jlspyiij.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ocqvcynb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fljzcbuh.html

Go:   return a, b
来源：http://www.xuanzx.com/163agmvimql.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wbcgezmz.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163exxqbdla.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mlojgupl.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ryqjntbz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163atgjimqs.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163amdwbwgl.html


<!-- 参考信息 -->