外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163uaxwijjl.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qhbpvsik.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163apeulyno.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ilaueqzf.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163yzujrwfc.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bxaeuhbs.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163rcuhqfaz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163esfmcpoo.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163crkdjpdv.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163noswdvjc.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163fydpqagp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163oyridzpo.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163ryasofke.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163frczaftr.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163ohgdgbsl.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ughxycne.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163yxuzdapb.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163afhgzncg.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163fqluiymp.html

[A17] 位运算
来源：http://www.sxryk.cn/163kcgbvovd.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zdhdnpwk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163vggcbwfj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163cezmseyo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163oqswfjpt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fmnazuuq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kxtjxayc.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wehsbccv.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163spnnzcff.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163jtufkalo.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163ppexnjmy.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163gijbcprn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163rnykbtve.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163pfdefxnd.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163lnluvnba.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163wnvqyfmf.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163gdtzzsdb.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163vkpxjkdx.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163tgjmsmsk.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163yevtxfqt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163tglaboam.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zlltsmbw.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163miwbpsdg.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163rwjpbjdk.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163tngfkjqm.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163txqrdagt.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163kjeapzfn.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163bqwhkeok.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rcxejzwl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163nfzleiby.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163myuwelwq.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163esjwpuws.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jtpjbbkz.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163dqmxlzog.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163cpnzlikz.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163zqewvkse.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163tyvysagh.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163wavcteyp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163njerwjrw.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vupuofvw.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163hfwxuola.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uqphmwvz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hwxvehwc.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dytpmmlg.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163knylyalt.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163sefgvquz.html

Py:   len(s)
来源：http://www.sxryk.cn/163evcnsgne.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163kpeerory.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163fhltnnjm.html

TS:   s.length
来源：http://www.xuanzx.com/163ruiqrukr.html

Java: s.length()
来源：http://www.sxryk.cn/163bdlvmehs.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163zybvdtmm.html

Ruby: s.length
来源：http://www.xuanzx.com/163twokwcha.html

C#:   s.Length
来源：http://www.sxryk.cn/163ijtvgria.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163dyvcsonz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ruewiwyz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163smxmymsi.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ffhdpcxi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pymjtgfz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163arquhsvf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163iixzctqp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163paejrzbz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163pyjbxqgi.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163agkbwxdd.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163rvnhjpta.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163sszcfepu.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163cdpcvcqj.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163njyzrlzk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163gexkhfhh.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163hkvxeynf.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163nlhbmztk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163nlcfrpfr.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163oxcqqvbx.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163nfwlodbq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pblvfyor.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zvhmfkeg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163etqupwja.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163gundluum.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163lgtgvjgs.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163deoyrjsr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163rvgdimkv.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163pamktqzy.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163txwuasue.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163gpnubxtj.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163jwfpvcry.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ubarnxvn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ctmqxtxa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163opdzwnlc.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163tqdkywok.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163lnrhiozr.html

================================================================================
来源：http://www.aibaodan.cn/163vlethsza.html

B. 流程控制
来源：http://www.sxryk.cn/163newmwqou.html

================================================================================
来源：http://www.xuanzx.com/163bckgryuc.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163bknnewpb.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163uosvkpim.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163msybkmbr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163soxkqytz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ktwfrevy.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163tcurxwaz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163dqvmbqbp.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163dgqqkaks.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163riogafpz.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163zmttdqti.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163byeosiom.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163mmkgmihg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hnsfejnw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163utnovsir.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zzaawcyn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163cvnmcooc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163lthcvecw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hwhspuwo.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ooedqqoo.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163kroekpes.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163exqslhpz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163zhttpmrs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ioebtkfr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163qwzxhpld.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163smndppfe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163bysohqhn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163gvtojtlo.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163pwadxocq.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jmckfvms.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163fvxhhosr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rmbtnmtk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163spbhuhmv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163zjfmgjzt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163zhpwqzyn.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163dvcbihnp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hsuwmbmr.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163lpyulhwa.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163pydiymxh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163pfkdejnh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fzlzzgpx.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163lpfgxsaj.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163vcwjnexf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163gfbbcwle.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163wlajanes.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163kjonrprr.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wlkfjpkd.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163wcfhlxpc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163etuemcdu.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163mytddjqk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zzmmortz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163xyfcszsl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163efzttnbt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163htghftfj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163bzjsxllb.html

[B07] while 循环
来源：http://www.xuanzx.com/163qxhcybjq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ddnvhnjx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163vxxucbsf.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cugluepx.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jswvelci.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163axqrgiks.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qjxcvmna.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163olsupfxo.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163clfxssto.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163fwpaieee.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163xouxqoup.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mknelshi.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163lholjfxv.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163sozojmsp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163zjqiuele.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163bafzokkk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163dxwehkhu.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ubhtniot.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163rxjidnsx.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bqazujfc.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ykiswipu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163yarjukqt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zkrylbfm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gesrxhkk.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163aziihuyk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163tzskxzwo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zcpreaum.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ldqsapgn.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163ykrxwswp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163gxcfrtuh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163ntnzofns.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163hbpghgkm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163nkccahpn.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163whwzgvrg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163pngkwylj.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163cmlptezy.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163ddxbwefv.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163nldqbkzt.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163yrhxwlig.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163cyffswze.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ijawvtnx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163matxjsly.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163rwvbilsg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163aphadqev.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pfyrtins.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163vizbcjdg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163giajcdya.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163rgsydknp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ibuvaiio.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163eaytllrr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ewfavnog.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163zjcjipds.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163zhzlxdyg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163szppjhvh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163zhdzzpjf.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163fbeydfui.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163qhtrbpak.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163neamyyjc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163aprigkql.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163polvydjt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163itjqgruo.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163fnxsiyof.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163shnqexyk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163diyfswei.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163wjahyoqy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ioumqvzm.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163npazedhp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163uhqhhurz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163efrpzlpj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xpjorbjg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163iseaqiqw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ksabrjwo.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163dbzqaveq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163byqsxhib.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163tgpzhxej.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163qgtornfi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163lemwzgwi.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ipwnzvyn.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163dopcndja.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163hyihqnyo.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163uydauqdr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163vxgeblay.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ufakuern.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163fdeiwotd.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163oobdtegf.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163exxfdjhh.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163iwajykpp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ggnntasi.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163dhuvolmj.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163wajsuoof.html

================================================================================
来源：http://www.xuanzx.com/163jcrqzdvv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163uhtfosvd.html

================================================================================
来源：http://www.xuanzx.com/163vdmlblcr.html

[C01] 定义函数
来源：http://www.sxryk.cn/163asthypjb.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163cikjtgya.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zzzecrma.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ffkeggwu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163girlqpzq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dwhlocks.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mstgknkp.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163snuqiyac.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163idyrbsab.html

[C02] 默认参数
来源：http://www.xuanzx.com/163kptlshpi.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163avfreymo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163eptzvxck.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163fsqbixvy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ttwoyspi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163vztdolql.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163pjrlsnfh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163jusbfage.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163hnbyyihi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ckcorzqs.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163wklrgsra.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163zjdfekur.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ttfkkflk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lttixekf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dpeanmlj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163oxsfuqek.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163worjcilp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ddnqhdlq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163btdythwf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jdzscbgn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163twptnyxm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163uzsizrek.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163lpxdhxny.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163vgsircae.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ohyledue.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rcuhsine.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oznhobim.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163whcaniyn.html

Py:   return a, b
来源：http://www.sxryk.cn/163pnoucbcx.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vjguursb.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163nzdujikj.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163oeswtdam.html


<!-- 参考信息 -->