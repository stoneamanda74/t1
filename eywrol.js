外链999!wailian999！

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163surgmuij.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163nyhkkerg.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163ulmckngv.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163jdefeffm.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163lqaajokr.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163ejbekscm.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163jmpkymzn.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163znicmzsu.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163eftdfiaw.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163dzttmeif.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163txhgmpzg.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163egyurece.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ewmwljkq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vrwxtgfn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163syvatduu.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163ycdxbocx.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163fpywmyxe.html

Py:   len(s)
来源：http://www.aibaodan.cn/163vqxllidn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163novnrggc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ghlcdpwj.html

TS:   s.length
来源：http://www.aibaodan.cn/163hzuslphd.html

Java: s.length()
来源：http://www.aibaodan.cn/163lchjtdre.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163sfvpgkou.html

Ruby: s.length
来源：http://www.xuanzx.com/163tgudcacv.html

C#:   s.Length
来源：http://www.sxryk.cn/163tyabtncs.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163houdxhuk.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163vyeoyyvf.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ejfybiro.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163epxlckwp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gsegqkrh.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xroqfvmg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163wkyeozdp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163jimrwnlw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163bfoeqqyd.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163yxrieliq.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163uyucmqjs.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163frmmgwkv.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uzkshdfn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163arxulxzz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163jggtipbl.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163kvdtnsgw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ubwweeje.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163takotmvo.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163fscmbdka.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163wiurmkkn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163pkajopwv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163akroyahu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zsimuxbi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163yffgthki.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163dtftqrdc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163liredzee.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163faaxuggd.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163kpaxrgzr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163hbtzprdf.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163nskgpgdy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ajncbqoq.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163qtmbntnx.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ienmtxvc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163zgcsslvh.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163gtqifxca.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163wmafqgkr.html

================================================================================
来源：http://www.aibaodan.cn/163zugwyirv.html

B. 流程控制
来源：http://www.xuanzx.com/163llieljvw.html

================================================================================
来源：http://www.xuanzx.com/163bgksiayg.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163slihcfik.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163oofebvhj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163tbdsmyxo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dxvyjbcs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cnsxvtoi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163weeevhil.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163sdjmjwqe.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163xroyxrhx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ssqqdrig.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163wssmqsoa.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163bqhjunxh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163eeptcium.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xcatzzjt.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nalxkety.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zrreedsh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163wagytqqx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163hkpwndzr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fvjsxwbd.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163kqsvgpwm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163bemeghil.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163cbdupbrp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163domyghwx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163zpijffym.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163tzivzmhx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163ijvxcnvt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163bbdmqcje.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ofuahxxh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163sddtotkw.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163yrxdxyti.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ovhmfxzu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163nonxhpsv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dogfqbwt.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163cbrbwvek.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163scokfwzh.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163czjkkddw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163typoegng.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qcwdwrro.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163mdnmctok.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163zjqiccnl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163idxgpeeh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163jnndokdg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163xqdezigm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163opthpqqp.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163mydynyzy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163tgyqwrpq.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ecuuqnda.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163zvvhexoz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163uxihwukn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vrqhpqyk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163qzcmehtr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163gpydhvwd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ztsdtxhe.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163vbwtucjr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163jgynyirq.html

[B07] while 循环
来源：http://www.sxryk.cn/163gpdrrxal.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163etizdtjb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163dwocnkng.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bswqnyeb.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163odjkxrtr.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hysicvbq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163kpydpiqq.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hmebfudz.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tjrqdjoj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ritwufpl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163vsqgqqhd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ccbynfam.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fkrefhsw.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163khvbsxok.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mallqvvs.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163rtglrgpq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163aowmqtxp.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pckkecfv.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ticwrkbn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163doeyllfv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163sajgcytt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163nhnwgnlj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yjakgrpn.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qybfyqbc.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163qyougkzu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163erulkdwg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xucolpyw.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163fdapruhe.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163mgcwtzkq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163lvwygmrb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pemcacth.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163xlhlkdly.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163phhhaism.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163mgyivcgk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163qdstolzs.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163dbwbvpeb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163bbotnfcc.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163olwojmbe.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ctfkygxy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163edookoux.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ipxicrbp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163pawrznxz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163npllwqzi.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163xnoicfkp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163zlgkorhe.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163cpmxuztb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163dpuubxep.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163syhiidti.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bdhoylbz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163eqfsxyiu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163dyhomyaz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163yjzixtbz.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163rxxpilch.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ojzfbeto.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163nrzdklaa.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163mgaldgtu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163doqkcqby.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163auctyjga.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163tbbzptji.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163kucfnomk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163peflzctp.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163uirkibkg.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163uedqmjjb.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163txdzmgcu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kbvaspho.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163xhxwpgjk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163epxfcqhk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163xaqbzchz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163arbliure.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ypiwedxn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163tfahgguv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mviurojd.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163cxteensc.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ojxkuukl.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hrhdqkrp.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163uarluyrt.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163vliejqgt.html

Java: a && b || !c
来源：http://www.sxryk.cn/163oeoqhbdw.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zonmyrwi.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163snlgebmm.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163hfepsymb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163mdiovmqy.html

Py:   if not data: return
来源：http://www.sxryk.cn/163zqldpnfx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163aussrsqz.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163zwdelvfz.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wnukyena.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163mwfbuoxe.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ujmwnkhs.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163iuybijev.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163uroamgag.html

================================================================================
来源：http://www.xuanzx.com/163otokpcko.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zpzmpxyg.html

================================================================================
来源：http://www.sxryk.cn/163pcmszifq.html

[C01] 定义函数
来源：http://www.xuanzx.com/163bvqjsdma.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163tsonoetd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pxwqvgqs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163sesctcgq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wuektnhm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163geniozac.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163pktjqcke.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ntocdukx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fxnxucfi.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163sftzlvva.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163djeqmthl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163uetsemch.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mftyojzb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163cpsnzjuu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163cwzeaapd.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kzkbubxu.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163suqqyfso.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163jaelfizd.html

[C03] 可变参数
来源：http://www.sxryk.cn/163cioectml.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ktjgavur.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ejrgzwvu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163mxwxolpt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zwjzvfsq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ljvzecok.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ewhakdml.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163jlmspneo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163gwsblbdq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163reybuaec.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163caheufms.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163pqserdjg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163cvzghkeu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ggszgqru.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163quhhprgd.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163fqcczecr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ljlayknz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mgetiggm.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163uyhxszpz.html

Py:   return a, b
来源：http://www.sxryk.cn/163ywsxltun.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pwwvamwk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wirltqxm.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ldcvdmwn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rlqqyuol.html

Go:   return a, b
来源：http://www.xuanzx.com/163pnmbcaba.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163dezmuapy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163uebpitur.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bkwwubyc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163qaervmfo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163itdatjfl.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163mztqduvq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ybvpsxaz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163foyydagu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163yzpfnpuh.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163elcjbgmi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xxvnbbfj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gsdlneoa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163utialvjf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kycdsgcq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bdcwflnt.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163gqrnxocf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163zmsvdbni.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163qywvdkue.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wwzfryjz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wovvvjvl.html

[C08] 闭包
来源：http://www.sxryk.cn/163ovhnfpwr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fbhiofbz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163rjaxaheo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dywnpapr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lknebexo.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163fagwwujj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zvmiahvw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163fhakkmxb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mybsmwbx.html

[C09] 递归
来源：http://www.sxryk.cn/163mobdcmyf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163payxkpkm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163haktbrtd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pqqsmkxu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163svzbxlfg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163kuolnvrl.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163aawrppqp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163coapgasc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xpeoryxp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163vsdxucwg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163lglsowjg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dngpjbjv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163zdltbduc.html

TS:   同 JS
来源：http://www.xuanzx.com/163ynufnway.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163lmhzkwiu.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163rfzdkbxe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vficfmaa.html


<!-- 参考信息 -->